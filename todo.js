const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    });
}

//Enter時にイベントを発動
form.addEventListener("submit", function (event) {
    //submitした時のリロードを防ぐ : ブラウザAPIのメソッドを利用
    event.preventDefault();
    add();
});

function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {  //暗黙的型変換
        const li = document.createElement("li");

        li.innerText = todoText;                 //ユーザーが入力した値を取得
        li.classList.add("list-group-item");     //liタグにデザインを与える

        //リロードしても打ち消し線はついたままにする
        if (todo && todo.completed) {
            li.classList.add("text-decoration-line-through");
        }

        //右クリックを検知してtodoを削除
        li.addEventListener("contextmenu", function(event) {
            event.preventDefault(); //ポップアップの表示をブロック
            li.remove();
            saveData(); //ローカルストレージにも反映
        });

        //クリックすると打ち消し船を入れ、既に入っていたらはずす
        li.addEventListener("click", function() {
            li.classList.toggle("text-decoration-line-through");
            saveData(); //ローカルストレージにも反映
        });

        ul.appendChild(li);
        input.value = "";
        saveData();
    }
}


/**
 * ToDoを入力されたら,データを取ってきてローカルストレージに保存
 */
function saveData() {
    const lists = document.querySelectorAll("li");

    //データをまとめておく為の配列を準備
    let todos = [];

    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains("text-decoration-line-through") //classを持っているか確かめる
        };
        todos.push(todo);  //データを配列に追加
    });

    //ローカルストレージに値をJSON形式で保存
    localStorage.setItem("todos", JSON.stringify(todos));
}



//mainブランチで間違って変更