const mongoose = require('mongoose')

const characterSchema = mongoose.Schema({
    characterName: String,
    characterClass: String,
    characterSpec: String,
    characterServer: String,
    warcraftLogsLink: String,
    gearLink: String,
    raidsAppliedTo: [String],
    raidsApprovedTo: [String],
    raidsConfirmedTo: [String],
}, {
    timestamps: true,
})

module.exports = mongoose.model('Character', characterSchema)