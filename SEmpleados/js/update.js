window.onload = init;

function init() {
    if (!localStorage.getItem("token")) {
            window.location.href = "login.html";
        
    }
    document.querySelector('.btn-primary').addEventListener('click', update);
    console.log("espera");

}

function update() {
    var name = document.getElementById('input-name').value;
    var id = document.getElementById('input-id').value;
    console.log("holaaa"+name);

    axios({
        method: 'patch',
        url: 'http://localhost:3000/user/'+id,
        data: {
            user_name: name,
            user_id: id
            
        }
    }).then(function(res){
        console.log(res);
        alert("Cambio exitoso");
        window.location.href = "menu.html";
    }).catch(function(err) {
        console.log(err);
        alert("No eres administrador");
    })
}