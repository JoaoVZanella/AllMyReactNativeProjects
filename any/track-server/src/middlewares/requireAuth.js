const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('../routes/authRoutes');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers; // pega o parametro authorization do header do postman.
    // authorization === "Bearer kdcskfkkffjisfjis";

    if(!authorization) {
        return res.status(401).send({error: "Você precisa estar logado."});
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MEU_KEY_SECRETO', async (err, payload) => {

        if(err){
            return res.status(401).send({error: "Você precisa estar logado."})
        }

        console.log(payload);
        const { userId } = payload;

        const usuario = await User.findById(userId);
        req.usuario = usuario;
        next();
    });
};