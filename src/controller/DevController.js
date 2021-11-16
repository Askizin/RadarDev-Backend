const Dev = require('../models/Dev')
const Axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');



module.exports = {
    // Método de busca
    async index(req, res){
        const devs = await Dev.find()
        return res.json(devs)
    },
    // Método de Cadastro
    async store(req, res){
        const { github_username, techs, longitude, latitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){

            const apiGitResponse = await Axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = apiGitResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [ longitude, latitude ]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

            return res.json(dev)
        }
    }

}
