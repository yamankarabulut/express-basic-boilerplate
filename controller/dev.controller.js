const Languages = require("../models/languages.model.js");
const Users = require("../models/user.model.js");

exports.getDB = async (req, res) => {
    try {
        let users = await Users.find({});
        return res.status(200).send(users);
    } catch (error) {
        console.log('getUser error: '+error);
        return res.status(500).send({ success: false, code: 500, error: error });
    }
}

exports.createLanguage = async (req, res) => {
    try {
        if(!req.body){ return res.status(400).send({ success: false, code: 400, info: "body-cannot-be-empty!" }); }
        if(!req.body.language){ return res.status(400).send({ success: false, code: 400, info: "language-required" }); }
        let language = await Languages.findOne({ language: req.body.language});
        if(!language){ language = await Languages.create({ language: req.body.language}); }
        return res.status(201).send(language);
    } catch (error) {
        console.log('createLanguage error: '+error);
        return res.status(500).send({ success: false, code: 500, error: error });
    }
}

//TBI
exports.createFakeDB = async (req, res) => {
    try {
        let result = await Users.findOne({});
        if(result){ return res.status(400).send({ success: false, code: 400, info: "db-already-exists" }) }
        const usersToWrite = [
            { userId: 1, name: "John" }, { userId: 2, name: "Alice" }, { userId: 3, name: "Bob" },
            { userId: 4, name: "Emily" }, { userId: 5, name: "Michael" }, { userId: 6, name: "Sophia" },
            { userId: 7, name: "William" }, { userId: 8, name: "Olivia" }, { userId: 9, name: "James" },
            { userId: 10, name: "Emma" }, { userId: 11, name: "Liam" }, { userId: 12, name: "Isabella" },
            { userId: 13, name: "Alexander" }, { userId: 14, name: "Charlotte" }, { userId: 15, name: "Ethan" },
            { userId: 16, name: "Amelia" }, { userId: 17, name: "Jacob" }, { userId: 18, name: "Mia" },
            { userId: 19, name: "Harper" }, { userId: 20, name: "Matthew" }, { userId: 21, name: "Evelyn" },
            { userId: 22, name: "Daniel" }, { userId: 23, name: "Abigail" }, { userId: 24, name: "Sebastian" },
            { userId: 25, name: "Jack" }, { userId: 26, name: "Avery" }, { userId: 27, name: "Logan" },
            { userId: 28, name: "Sofia" }, { userId: 29, name: "David" }, { userId: 30, name: "Scarlett" },
            { userId: 31, name: "Joseph" }, { userId: 32, name: "Madison" }, { userId: 33, name: "Carter" },
            { userId: 34, name: "Aria" }, { userId: 35, name: "Luna" }, { userId: 36, name: "Samuel" },
            { userId: 37, name: "Grace" }, { userId: 38, name: "Jackson" }, { userId: 39, name: "Chloe" },
            { userId: 40, name: "Henry" }, { userId: 41, name: "Ellie" }, { userId: 42, name: "Wyatt" },
            { userId: 43, name: "Lily" }, { userId: 44, name: "Owen" }, { userId: 45, name: "Zoe" },
            { userId: 46, name: "Nathan" }, { userId: 47, name: "Hannah" }, { userId: 48, name: "Sam" },
            { userId: 49, name: "Mila" }, { userId: 50, name: "Luke" }, { userId: 51, name: "Leah" },
            { userId: 52, name: "William" }, { userId: 53, name: "Grace" }, { userId: 54, name: "Gabriel" },
            { userId: 55, name: "Avery" }, { userId: 56, name: "Sarah" }, { userId: 57, name: "Tyler" },
            { userId: 58, name: "Sophie" }, { userId: 59, name: "Evan" }, { userId: 60, name: "Nora" },
            { userId: 61, name: "Ryan" }, { userId: 62, name: "Lily" }, { userId: 63, name: "David" },
            { userId: 64, name: "Brooklyn" }, { userId: 65, name: "Matthew" }, { userId: 66, name: "Emma" },
            { userId: 67, name: "Andrew" }, { userId: 68, name: "Audrey" }, { userId: 69, name: "Nathan" },
            { userId: 70, name: "Claire" }, { userId: 71, name: "Joshua" }, { userId: 72, name: "Lucy" },
            { userId: 73, name: "Julian" }, { userId: 74, name: "Ella" }, { userId: 75, name: "Christopher" },
            { userId: 76, name: "Maya" }, { userId: 77, name: "Anthony" }, { userId: 78, name: "Luna" },
            { userId: 79, name: "Thomas" }, { userId: 80, name: "Madelyn" }, { userId: 81, name: "Oscar" },
            { userId: 82, name: "Camila" }, { userId: 83, name: "Eliana" }, { userId: 84, name: "Caleb" },
            { userId: 85, name: "Victoria" }, { userId: 86, name: "Isaac" }, { userId: 87, name: "Aurora" },
            { userId: 88, name: "Connor" }, { userId: 89, name: "Penelope" }, { userId: 90, name: "Christian" }
        ];
        result = await Users.insertMany(usersToWrite);
        return res.status(201).send(result);
    } catch (error) {
        console.log('createFakeDB error: '+error);
        return res.status(500).send({ success: false, code: 500, error: error });
    }
}