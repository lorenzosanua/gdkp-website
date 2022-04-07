const asyncHandler = require('express-async-handler')

const Character = require('../models/characterModel')
const User = require('../models/userModel')

//GET /api/character/:id
const getCharacter = asyncHandler(async (req,res) => {
    const character = await Character.findById(req.params.id);
    res.json(character);
});

//POST /api/character/
const setCharacter = asyncHandler(async (req,res) => {
    if(!req.body.userID) {
        res.status(400)
        throw new Error('missing user ID')
    }

    const character = await Character.create({
        characterName: req.body.characterName,
        characterClass: req.body.characterClass,
        characterSpec: req.body.characterSpec,
        characterServer: req.body.characterServer,
        warcraftLogsLink: req.body.warcraftLogsLink,
        gearLink: req.body.gearLink,
        characterNotes: req.body.characterNotes,
    })
    const updatedUser = await User.findByIdAndUpdate(req.body.userID, {
        $push: {
            characters: character._id
        }
    });

    res.json(character)
})

//PUT api/character/:id
const updateCharacter = asyncHandler(async (req,res) => {
    const character = await Character.findById(req.params.id)

    if(!character){
        res.status(400)
        throw new Error('character not found, wrong ID')
    }

    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.json(updatedCharacter)
})

//DELETE /api/character/:id
const deleteCharacter = asyncHandler(async (req, res) => {
    const character = await Character.findById(req.params.id)

    if(!character){
        res.status(400)
        throw new Error('character not found, wrong ID')
    }

    const deletedCharacter = await Character.findByIdAndRemove(req.params.id)
    const updatedUser = await User.findByIdAndUpdate(req.body.userID, {
        $pull: {
            characters: character._id
        }
    });

    
    res.json(deletedCharacter)
})

module.exports = {
    getCharacter,
    setCharacter,
    updateCharacter,
    deleteCharacter,
}