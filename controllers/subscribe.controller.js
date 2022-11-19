const Subscriber = require("../models/subscriber.model");

const getSubscribe = (req, res) => {
    res.render("subscribe-success", {
        title: "Successfully Subscribed!",
        css: [
            "subscribe-success"
        ]
    });
}

const postSubscribe = (req, res) => {
    const subscriber = new Subscriber(req.body);

    subscriber.save()
        .then((result) => {
            res.redirect("/subscribe");
        })
        .catch((err) => console.log(err))
};

// export the functions to be used in the router
module.exports = {
    getSubscribe,
    postSubscribe
};