const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    seloTempo: Number, //timestamp
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        precisao: Number,
        direcao: Number,
        velocidade: Number
    }
});

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // desta maneira dizemos que o type de dado que estamos trabalhando está referenciado dentro do nosso mongo db
        ref: 'User', // mongoose.Schema.Types.ObjectId esta referenciando a User
    },
    trackName: {
        // nome da track
        type: String,
        default: ''
    }, 
    locations: [pointSchema]
});

mongoose.model('Track', trackSchema);