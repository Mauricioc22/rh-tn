window.onload = init;

function init() {
    if (!localStorage.getItem("token")) {
        window.location.href = "login.html";
    } else{
    
        document.querySelector('.btn-primary').addEventListener('click', function () {
            window.location.href = "mostrar.html";
        });
        document.getElementById('2').addEventListener('click', function () {
            window.location.href = "signin.html";
        });
        document.getElementById('3').addEventListener('click', function () {
            window.location.href = "update.html";
        });
        document.getElementById('4').addEventListener('click', function () {
            window.location.href = "delete.html";
        });
        document.getElementById('5').addEventListener('click', function () {
            window.location.href = "search.html";
        });        
    }

}