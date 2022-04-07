const mongoose = require('mongoose')

const organizationSchema = mongoose.Schema({
    organizationName: String,
    organizationRules: String,
    organizationOwner: String,
    adminsList: [String],
    raidmakersList: [String],
    membersList: [String],
    raidList: [String],
    banList: [String],
}, {
    timestamps: true,
})

module.exports = mongoose.model('Organization', organizationSchema)