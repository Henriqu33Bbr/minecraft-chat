const btn_entrar = document.getElementById("enter-button")
const btn_sair = document.getElementById("leave-button")
const input_container = document.getElementsByClassName("input-container")[0]
const btns = document.getElementById("buttons")
const loading_screen = document.getElementById("loading-screen")
const user = document.getElementById("input-name")

btn_entrar.addEventListener("click", function() {

    if (user.value.trim() === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    input_container.style.display = "none";
    btns.style.display = "none";
    loading_screen.style.display = "block";

    localStorage.setItem("name", user.value.trim());

    // setTimeout(function() {
    //     window.location.href = '../chat/index.html';
    // }, 6650);

    setTimeout(function() {
        window.location.href = '../chat/index.html';
    }, 1000);
});

btn_sair.addEventListener("click", function() {
    window.close();
});
