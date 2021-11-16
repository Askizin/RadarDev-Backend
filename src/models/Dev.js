const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_usernames: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere' // Obrigatório ter um indice de lat e long.
    }
})

module.exports = mongoose.model('Dev', DevSchema);
