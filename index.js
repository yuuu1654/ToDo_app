const form = document.getElementById("form");
const input = document.getElementById("input");

//Enterされた時にイベントを発動する
form.addEventListener("submit", function (event) {
    //submitした時のリロードを防ぐ
    event.preventDefault();
    add();
});

function add() {
    const li = document.createElement("li");
    li.innerText = input.value;
}
