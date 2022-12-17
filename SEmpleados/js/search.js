window.onload = init;
var headers = {};
var namee=[];
var url = "http://localhost:3000";

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            'Authorization': "Bearer " + localStorage.getItem("token")
        };
        document.querySelector('.btn-primary').addEventListener('click', loadUsers);
        
    }
    else {
        window.location.href = "index.html"
    }
}

function loadUsers() {
    var name = document.getElementById('input-name').value;
    console.log(name);
    axios.get(url + "/user/" + name, headers).then(function (res) {
        console.log("res: " + res);
        displayUser(res.data.message);
    }).catch(function (err) {
        console.log(err);
        console.log("error asd");
    })
}

function displayUser(user) {
    var body = document.querySelector("body");
    
    for (var i = 0; i < user.length; i++) {
        body.innerHTML += `<h3>${user[i].user_name}</h3>`
        namee[i]=user[i].user_name;
        body.innerHTML += `<h5>${user[i].user_app}</h5>`
        body.innerHTML += `<h5>${user[i].user_apm}</h5>`
        body.innerHTML += `<h5>${user[i].user_tel}</h5>`
        body.innerHTML += `<h5>${user[i].user_dir}</h5>`
        body.innerHTML += `<h5>${user[i].user_mail}</h5>`
        if (user[i].admin == 1) {
            body.innerHTML += `<h5>Administrador: Si</h5>`
        } else {
            body.innerHTML += `<h5>Administrador: No</h5>`
        }
        
        
        body.innerHTML += `<br>`
        
        

    }
    

}


