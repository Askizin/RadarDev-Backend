const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github_usernames: String,
    bio: String,
    avatar_url: String
})

module.exports = mongoose.model('Dev', DevSchema);
