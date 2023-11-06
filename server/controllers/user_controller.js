class UserController {
    async registration(req, res, next) {

    }
    async login(req, res, next) {
        
    }
    async check(req, res, next) {
        res.json('Hello')
    }
}

module.exports = new UserController()