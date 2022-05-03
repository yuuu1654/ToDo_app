const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

//Enter時にイベントを発動
form.addEventListener("submit", function (event) {
    //submitした時のリロードを防ぐ
    event.preventDefault();
    add();
});

function add() {
    let todoText = input.value;
    if (todoText) {  //暗黙的型変換
        const li = document.createElement("li");
        li.innerText = todoText;                 //ユーザーが入力した値を取得
        li.classList.add("list-group-item");     //liタグにデザインを与える
        ul.appendChild(li);
        input.value = "";
    }
}
