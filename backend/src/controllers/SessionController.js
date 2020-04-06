const connection = require('../database/connection');
module.exports = {

    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

           ong ? res.json(ong) : res.status(400).json({error: 'A ong não foi encontrada'})
    }
}