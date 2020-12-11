// tudo relacionado a autenticação;
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/cadastrar', async (req,res) => {
    const { email, senha } = req.body;
    console.log(req.body);

    try{
        // pegando a schema e salvando email e senha no banco
        const usuario = new User({ email, senha});
        await usuario.save();

        // criando um token com jwt
        const token = jwt.sign({ userId: usuario._id}, 'MEU_KEY_SECRETO' );
        res.send({token});

        // deu tudo certo

    } catch (err){
        console.log(err);
        console.log(err.message);
        return res.status(422).send(err.message);
    };

});

router.post('/entrar', async (req,res) => {
    const { email, senha } = req.body

    if(!email) {
        return res.status(422).send({error: 'Informe o seu email.'});
    } else if (!senha){
        return res.status(422).send({error: 'Informe a sua senha.'});
    } 

    const usuario = await User.findOne({ email });

    if(!usuario){
        return res.status(404).send({error: 'E-mail não encontrado.'});
    }

    try{
        
        await usuario.comparePassword(senha);
        const token = jwt.sign({ userId: usuario._id}, 'MEU_KEY_SECRETO' );
        res.send({token});

    } catch(err){
        return res.status(422).send({ error: 'Senha ou email inválidos'});
    }
});

module.exports = router;