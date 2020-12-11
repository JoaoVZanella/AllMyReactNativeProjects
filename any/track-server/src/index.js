require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');

//ROTAS
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes')


const PORT = 3000;

const app = express();

app.use(bodyParser.json()); // colocar bodyParser sempre acima do authROutes
app.use(authRoutes);
app.use(trackRoutes);

const mongoLink = 'mongodb+srv://admin:senhasenha@cluster0.1laux.mongodb.net/<test>?retryWrites=true&w=majority'
mongoose.connect(mongoLink, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});

mongoose.connection.on('connected', () =>  {
    console.log('Conectado com o mongo db');
});

mongoose.connection.on('error', (err) => {
    console.log('Erro ao conectar com o mongo db: ' + err );
});

app.get('/', requireAuth, (req, res) => {
    res.send('Seu email é ' + req.usuario.email + 'e sua senha ' + req.usuario.senha);
});


app.listen(PORT, () => {
    console.log('Rodando na porta: ' + PORT);
})