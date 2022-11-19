const { use } = require("../routes/index.route");

const getHome = (req, res) => {
    res.redirect("/blog");
};

const getAbout = (req, res) => {
    res.render("about", {
        title: "About Us",
        css: ["about"]
    });
};

const getContact = (req, res) => {
    res.render("contact", {
        title: "Contact Us",
        css: ["contact"]
    });
};

// export the functions to be used in the router
module.exports = {
    getHome,
    getAbout,
    getContact
};
