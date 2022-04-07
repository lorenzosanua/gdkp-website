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
    raidAppliedCharacters: [String],
    raidApprovedCharacters: [String],
    raidConfirmedCharacters: [String]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Raid', raidSchema)