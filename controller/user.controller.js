const Users = require("../models/user.model");


exports.getUser = async (req, res) => {
    try {
        if(!req.body){ return res.status(400).send({ success: false, code: 400, info: "body-cannot-be-empty!" }); }
        if(!req.body.userId){ return res.status(400).send({ success: false, code: 400, info: "userId-cannot-be-empty!" }); }
        const user = await Users.findOne({userId: req.params.id});
        return res.status(200).send(user);
    } catch (error) {
        console.log('getUser error: '+error);
        return res.status(500).send({ success: false, code: 500, error: error });
    }
}

exports.signup = async (req, res) => {
    try {
        if(!req.body){ return res.status(400).send({ success: false, code: 400, info: "body-cannot-be-empty!" }); }
        if(!req.body.userId){ return res.status(400).send({ success: false, code: 400, info: "userId-cannot-be-empty!" }); }
        const user = await Users.create(req.body)
        return res.status(201).send(user);
    } catch (error) {
        console.log('signup error: '+error);
        return res.status(500).render("error");
    }
}
