const mongoose = require('mongoose')

const raidSchema = mongoose.Schema({
    raidLocation: String,
    raidTimeDate: Date,
    raidHost: String,
    raidOrganization: String,
    raidNotes: String,
    raidCompleted: Boolean,
    raidPot: Number,
    raidExpenses: Number,
    raidPaidMembers: Number,
    raidAppliedCharacters: [{
        charName: String,
        charClass: String,
        charSpec: String,
        charID: String
    }],
    raidApprovedCharacters: [{
        charName: String,
        charClass: String,
        charSpec: String,
        charID: String
    }],
    raidConfirmedCharacters: [{
        charName: String,
        charClass: String,
        charSpec: String,
        charID: String
    }]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Raid', raidSchema)