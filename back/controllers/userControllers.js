const userModel = require("../models/socio");

module.exports = class UsersController{

    static async insert(req, res){
        try{
            let user = req.body;
            user = await userModel.insert(user);
            user.password = undefined;
            res.status(201).json(user);

        }catch(err){
            res.status(400).json({"message": err.message})
        }
    }

    static async validateUser(req, res){
        try{
            const credential = req.body;
            const user = await userModel.findOne({"documento": credential.username});
            user.password = undefined;
            res.status(201).json(user);

        }catch(err){
            res.status(400).json({"message": err.message})
        }
    }
}