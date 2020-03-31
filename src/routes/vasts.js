const express = require('express');
const router = new express.Router();
const Vast = require('../models/vasts');

router.post('/create_vast', async (req, res) => {
    const fields = Object.keys(req.body);

    if(fields.indexOf('vastUrl') === -1){
        res.status(400).send({
            error: 'vastUrl is required.'
        });
    }

    try {
        const { vastUrl, position = 'bottom_right', width = 100, height = 100 } = req.body;

        const vast = new Vast(vastUrl, position, width, height);

        await vast.save();

        res.status(201).send();
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/fetch_vasts', async (req, res) => {
    try {
        const vasts = await Vast.fetchAll();

        res.send({
            vastIds: vasts[0]
        });
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/fetch_vast', async (req, res) => {
    try {
        const vast = await Vast.findById(req.query.id);

        if(vast){
            res.send(vast[0][0]);
        } else {
            res.status(404).send();
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

router.post('/edit_vast', async (req, res) => {
    const fields = Object.keys(req.body);

    if(fields.indexOf('vastId') === -1){
        res.status(400).send({
            error: 'vastId is required.'
        });
    }

    try {
        const { vastId, vastUrl, position, width, height } = req.body;
        const res = await Vast.findById(Number(vastId));
        const vast = res[0][0];

        if(vastUrl){
            vast.vast_url = vastUrl;
        }

        if(position){
            vast.position = position;
        }

        if(width){
            vast.width = width;
        }

        if(height){
            vast.height = height;
        }

        // TODO - Finish Edit route
        res.status(200);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
