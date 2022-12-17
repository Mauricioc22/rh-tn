const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require("../config/database");
const auth = require('../middleware/auth');

user.post("/signin", async (req, res, next) => {
    const { user_name, user_mail, user_password, user_app, user_apm, user_tel, user_dir } = req.body;

    if (user_name && user_mail && user_password && user_app && user_apm && user_tel && user_dir) {
        let query = "INSERT INTO user(user_name, user_mail, user_password, user_app, user_apm, user_tel, user_dir)";
        query += ` VALUES ('${user_name}', '${user_mail}', '${user_password}', '${user_app}', '${user_apm}', ${user_tel}, '${user_dir}')`;

        const rows = await db.query(query);
        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Usuario insertado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

user.post("/login", async (req, res, next) => {
    const { user_mail, user_password } = req.body;
    const query = `SELECT * FROM user WHERE user_mail = '${user_mail}' AND user_password = '${user_password}'`;
    const rows = await db.query(query);
    
    if (user_mail && user_password) {
        if (rows.length == 1) {
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
            }, "debugkey");
            return res.status(200).json({ code: 200, message: token });

        }
        else {
            return res.status(200).json({ code: 401, message: "Usuario y/o contrasena incorrectos" });
        }
    }
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

//autorizacion
//user.use(auth);

user.delete("/:id([0-9]{1,2})", async (req, res, next) => {
    const query = `DELETE FROM user WHERE user_id =${req.params.id}`;

    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
        return res.status(200).json({ code: 200, message: "Usuario eliminado correctamente" });
    }
    return res.status(404).json({ code: 404, message: "Usuario no encontrado" });
});

user.put("/:id([0-9]{1,3})", async (req, res, next) => {
    const { user_name, user_mail, user_password, user_app, user_apm, user_tel, user_dir } = req.body;

    if (user_name && user_mail && user_password && user_app && user_apm && user_tel && user_dir) {
        let query = `UPDATE user SET `;
        query += `user_name='${user_name}', user_mail='${user_mail}', user_password='${user_password}', user_app='${user_app}', user_apm='${user_apm}', user_tel=${user_tel}, user_dir='${user_dir}' WHERE user_id=${req.params.id};`;
        const rows = await db.query(query);
        console.log(rows);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Usuario actualizado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" });

    }
    return res.status(500).json({ code: 500, message: "campos incompletos" });

});

user.patch("/:id([0-9]{1,3})", async (req, res, next) => {
    if (req.body.user_name) {
        let query = `UPDATE user SET user_name='${req.body.user_name}' WHERE user_id=${req.params.id}`;

        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Usuario actualizado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" });

});

//"/user" mostrar todo
user.get("/", async (req, res, next) => {
    const usrr = await db.query("SELECT * FROM user");
    return res.status(200).json({ code: 200, message: usrr });
});

user.get("/:id([0-9]{1,2})", async (req, res, next) => {
    const id = req.params.id;
    if (id >= 0 && id <= 3) {
        const usrr = await db.query("SELECT * FROM user WHERE user_id=" + id + ";");
        return res.status(200).json({ code: 200, message: usrr });
    }
    return res.status(404).send({ code: 404, message: "Usuario no encontrado" });

});

user.get('/:name([A-Za-z]+)', async (req, res, next) => {
    const name = req.params.name;
    const usrr = await db.query("SELECT * FROM user WHERE user_name ='" + name + "';");

    if (usrr.length > 0) {
        return res.status(200).json({ code: 200, message: usrr });
    }
    return res.status(404).send({ code: 404, message: "Usuario no encontrado" });
});

module.exports = user;
