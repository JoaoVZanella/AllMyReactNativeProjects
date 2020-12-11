const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
const Track = mongoose.model('Track');
const router = express.Router();


router.use(requireAuth);

router.get('/tracks', async(req, res) => {
    const tracks = await Track.find({ userId: req.usuario._id});

    res.send(tracks);
});

router.post('/tracks', async (req, res) => {
    const { trackName, locations } = req.body;

    if(!trackName || !locations){
        return res.status(422).send({error:"Informe o nome e a localização."});
    };

    try{    
        
        const track = new Track({ trackName, locations, userId: req.usuario._id});
        await track.save();
        res.send(track);
    } catch(err){
        res.status(422).send({error: err.message});
    };


});

module.exports = router;