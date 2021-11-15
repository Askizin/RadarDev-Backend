const Dev = require('../models/Dev')
const Axios = require('axios');



module.exports = {
    // Método de busca
    async index(req, res){
        const devs = await Dev.find()
        return res.json(devs)
    },
    // Método de Cadastro
    async store(req, res){
        const { github_username } = req.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){

            const apiGitResponse = await Axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = apiGitResponse.data;

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
            })
        }
    }

}
