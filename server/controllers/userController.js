class UserController {
    async registartion(req, res) {

    }
    async login(req, res) {

    }
    async check(req, res) {
        const {id} = req.query;
        res.json(query.id);
    }
}

module.exports = new UserController();