

exports.mainPage = async (req, res) => {
    try {
        /* stuff */
        return res.status(200).render("index", {  });
    } catch (error) {
        console.log('mainPage error: ' + error);
        return res.status(500).render("error");
    }
}

exports.aboutPage = async (req, res) => {
    try {
        /* stuff */
        return res.status(200).render("about", {  });
    } catch (error) {
        console.log('aboutPage error: ' + error);
        return res.status(500).render("error");
    }
}

exports.postRoute = async (req, res) => {
    try {
        /* stuff */
        return res.status(201).render("index", {  });
    } catch (error) {
        console.log('mainPage error: ' + error);
        return res.status(400).send({ success: false, code: 400, info: "bad-request", error: error });
    }
}