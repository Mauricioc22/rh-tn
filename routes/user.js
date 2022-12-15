const express = require('express');
const user = express.Router();
const db = require("../config/database");

user.post("/", (req, res, next) => {
    return res.status(200).json(req.body);
});

user.get("/", async (req, res, next) => {
    const usrr = await db.query("SELECT * FROM user");
    return res.status(200).json({ code: 1, message: usrr});
});

user.get("/:id([0-9]{1,3})", async (req, res, next) => {
    const id = req.params.id;
    if (id >= 0 && id <= 3) {
        const usrr = await db.query("SELECT * FROM user WHERE user_id="+id+";");
        return res.status(200).json({ code: 1, message: usrr});
    }
    return res.status(404).send({ code: 404, message: "Usuario no encontrado"});


});

user.get('/:name([A-Za-z]+)', async (req, res, next) => {
    const name = req.params.name;
    const usrr = await db.query("SELECT * FROM user WHERE user_name ='"+name+"';");

    if (usrr.length > 0) { 
        return res.status(200).json({ code: 1, message: usrr});
    }
    return res.status(404).send({ code: 404, message: "Usuario no encontrado"});
});

module.exports = user;
