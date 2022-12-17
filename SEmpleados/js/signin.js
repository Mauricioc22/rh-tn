window.onload = init;

function init() {
    if (!localStorage.getItem("token")) {
            window.location.href = "login.html";
        
       
    }
    document.querySelector('.btn-primary').addEventListener('click', signin);
}

function signin() {
    var name = document.getElementById('input-name').value;
    var uapp = document.getElementById('input-uapp').value;
    var uapm = document.getElementById('input-uapm').value;
    var tel = document.getElementById('input-tel').value;
    var dir = document.getElementById('input-dir').value;
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data: {
            user_mail: mail,
            user_password: pass,
            user_name: name,
            user_app: uapp,
            user_apm: uapm,
            user_tel: tel,
            user_dir: dir
            
        }
    }).then(function(res){
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "login.html";
    }).catch(function(err) {
        console.log(err);
        alert("No eres administrador");
    })
}