const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: String,
    username: String,
    email: String,
    role: String,
    characters: [String],
    organizations: [String]
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)