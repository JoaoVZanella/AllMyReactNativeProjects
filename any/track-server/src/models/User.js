const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        unique: false,
        required: true
    }
});

userSchema.pre('save', function(next) { // vamos usar this, nao suar arrow function
    const usuario = this;
    if(!usuario.isModified('senha')){
        return next();
    }

    // gerar o SALT e o hash
    bcrypt.genSalt(10, (err, salt) => { 
        // 10 é o nivel de dificuldade do SALT
        if(err){
            return next(err);
        }

        bcrypt.hash(usuario.senha, salt, (err, hash) => {
            if(err){
                return next(err);
            }
            usuario.senha = hash;
            next();
        })
    });
});

// validando a senha
userSchema.methods.comparePassword = function(candidatePassword){
    return new Promise((resolve, reject) => {
        const user = this;

        // 1- senha que vai ser validada, 
        // 2- hash + salt, 
        // 3- callback com variavel de erro euma booleana para ver se a senha foi ou nao validada

        // compara a senha com o hash + salt e valida atravez da callback. 
            bcrypt.compare(candidatePassword, user.senha, (err, isMatch) => {
                if(err){
                    return reject(err);
                } else {
                    return resolve(true);
                }

                // if(!isMatch){
                //     return reject(false);
                // };

                // resolve(true);
            });
    });
}

mongoose.model('User', userSchema);