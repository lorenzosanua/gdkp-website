const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Character = require('../models/characterModel')

//GET /api/user/:id
const getUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

//POST /api/user/
const setUser = asyncHandler(async (req,res) => {
    if(!req.body.discordID) {
        res.status(400)
        throw new Error('missing ID, login query likely failed')
    }

    const user = await User.create({
        _id: req.body.discordID,
        username: req.body.discordUsername,
        email: req.body.email,
        role: "User",
    })

    res.json(user)
})

//PUT api/user/:id
const updateUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('user not found, wrong ID')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.json(updatedUser)
})

//DELETE /api/user/:id
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('user not found, wrong ID')
    }

    //delete the user
    const deletedUser = await User.findByIdAndRemove(req.params.id)
    //delete all characters linked with the owner
    const deletedUsersCharacters = await Character.deleteMany({characterOwner: deletedUser._id})
    
    res.json(deletedUser)
})

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser,
}