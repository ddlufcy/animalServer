const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Animal= sequelize.import('../models/animal');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateSession = require('../middleware/validate-session');


// POST NEW ANIMAL
router.post('/newAnimal',validateSession, (req, res) => {
    const animal = {
        name: req.body.animal.name,
        legNumber: req.body.animal.legNumber,
        predator: req.body.animal.predator
    }
    // console.log(req);
    Animal.create(animal)
        .then(animal => res.status(200).json(animal))
        .catch(err => res.json(req.errors));
})
// GET ALL
router.get('/', (req, res) => {
    Animal.findAll()
        .then(animal => res.status(200).json(animal))
        .catch(err => res.status(500).json({
            error: err
        }))
})

// GET ANIMAL BY NAME
router.get('/:name', (req, res) => {
    Animal.findOne({
        where: {
            name: req.params.animal.name
        }
    })
    .then(animal => res.status(200).json(animal))
    .catch(err => res.status(500).json({
        error: err
    }))
    console.log(req);
})

// UPDATE BY NAME
router.put('/:name', validateSession, (req, res) => {
    Animal.update(req.body.animal, {
        where: {
            name: req.params.name
        }
    })
    .then(animal => res.status(200).json(animal))
    .catch(err => res.json({
        error: err
    }))
})
// DELETE BY NAME
router.delete('/:name', validateSession,(req, res) => {
    Animal.destroy({
        where: {
            name: req.params.name
        }
    })
    .then(animal => res.status(200).json(animal))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router;