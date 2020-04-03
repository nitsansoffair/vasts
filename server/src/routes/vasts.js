const express = require('express');
const router = new express.Router();
const validator = require('validator');

const Vast = require('../models/vasts');

router.post('/create_vast', async (req, res) => {
    const { vastUrl, position = 'bottom_right', width = 100, height = 100 } = req.body;

    if(!vastUrl){
        res.status(400).send({
            error: 'vastUrl is required.'
        });
    }

    try {
        const { dataValues } = await req.user.createVast({
            url: vastUrl,
            position,
            width,
            height
        });

        res.status(201).send(dataValues);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/fetch_vasts', async (req, res) => {
    try {
        const vasts = await req.user.getVasts();

        res.send({
            vastIds: vasts
        });
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/fetch_vast', async (req, res) => {
    try {
        if(!req.query.id){
            res.status(400).send({
                error: 'vastId is required.'
            });
        }

        if(!validator.isNumeric(req.query.id)){
            res.status(400).send({
                error: 'vastId should be numeric.'
            });
        }

        const response = await req.user.getVasts({ where: { id: req.query.id } });
        const vast = response[0].dataValues;

        if(vast){
            res.send(vast);
        } else {
            res.status(404).send({
                error: 'Vast did not found.'
            });
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

router.post('/edit_vast', async (req, res) => {
    const { vastId, vastUrl, position, width, height } = req.body;

    if(!vastId){
        res.status(400).send({
            error: 'vastId is required.'
        });
    }

    if(!validator.isNumeric(vastId.toString())){
        res.status(400).send({
            error: 'vastId should be numeric.'
        });
    }

    try {
        const vast = await Vast.findByPk(vastId);

        if(!vast){
            res.status(404).send({
                error: 'Vast did not found.'
            });
        }

        if(vast.userId !== req.user.id){
            res.status(401).send({
                error: 'You are not authorize.'
            });
        }

        vast.url = vastUrl ? vastUrl : vast.dataValues.url;
        vast.position = position ? position : vast.dataValues.position;
        vast.width = width ? width : vast.dataValues.width;
        vast.height = height ? height : vast.dataValues.height;

        await vast.save();

        res.status(200).send(vast.dataValues);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
