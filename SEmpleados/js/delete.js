window.onload = init;

function init() {
    if (!localStorage.getItem("token")) {
            window.location.href = "login.html";
        
    }
    document.querySelector('.btn-primary').addEventListener('click', update);
    console.log("espera");

}

function update() {
    var id = document.getElementById('input-id').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/user/'+id,
        data: {
            user_id: id,
            
        }
    }).then(function(res){
        console.log(res);
        alert("Eliminacion exitosa");
        window.location.href = "menu.html";
    }).catch(function(err) {
        console.log(err);
        alert("Error");
    })
}