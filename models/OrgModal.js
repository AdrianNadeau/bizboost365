const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const OrgSchema = new mongoose.Schema({
    orgName: {
        type: String,
        required: [true, 'Please provide your email'],
    },
    orgDomain: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
    },
    orgUrl: {
        type: String,
        required: true
    },
})
const org = mongoose.model('orgs', OrgSchema);
module.exports = org;
