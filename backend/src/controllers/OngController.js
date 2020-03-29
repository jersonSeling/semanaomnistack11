const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        // return response.send('Hello world!!!');

        //url?param1=xxx&param2=yyy...
        //const queryParams = request.query;
        // const routeParams = request.params;
        // const bodyParams = request.body;
        const {name,email,whatsapp,city,uf} = request.body;

        //gera uma ID aleatoria usando o crypto, q é um pacote ja do node
        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        // console.log(id);

        return response.json({id});
    }



}