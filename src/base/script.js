btn_entrar = document.getElementById("enter-button")
btn_sair = document.getElementById("leave-button")
input_container = document.getElementsByClassName("input-container")[0]
btns = document.getElementById("buttons")
loading_screen = document.getElementById("loading-screen")

btn_entrar.addEventListener("click", function() {
    const name = document.getElementById("input-name").value;

    if (name.trim() === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    input_container.style.display = "none";
    btns.style.display = "none";
    loading_screen.style.display = "block";

    setTimeout(function() {
        window.location.href = '../chat/index.html';
    }, 6700);
});

btn_sair.addEventListener("click", function() {
    window.close();
});
