const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

// import routes
const indexRoutes = require("./routes/index.route");
const subscribeRoutes = require("./routes/subscribe.route");
const blogRoutes = require("./routes/blog.route");

// import models
const Post = require("./models/post.model");
const Subscriber = require("./models/subscriber.model");

const app = express();

// connect to mongodb
const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@webit.kr1lv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to db')
        app.listen(process.env.PORT || 3000, function() {
            console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
        });
    }).catch((err) => console.log(err));

// register view engine;
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

function resetAtMidnight() {
    var now = new Date();
    var night = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // the next day, ...
        0, 0, 0 // ...at 00:00:00 hours
    );
    var msToMidnight = night.getTime() - now.getTime();

    setTimeout(function() {
        getPotd();              //      <-- This is the function being called at midnight.
        checkForEmail();        //      <-- This is the function being called at midnight.
        resetAtMidnight();    //      Then, reset again next midnight.
    }, msToMidnight);
}

function getPotd() {
    Post.find({ potd: true })
    .then((result) => {
        if (result) {
            result = result[0];
            Post.findByIdAndUpdate(result._id, { potd: false })
            .then(() => {
                Post.aggregate([{ $sample: { size: 1 } }])
                .then((result) => {
                    result = result[0];
                    Post.findByIdAndUpdate(result._id, { potd: true })
                    .then()
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        } else {
            Post.aggregate([{ $sample: { size: 1 } }])
                .then((result) => {
                    result = result[0];
                    Post.findByIdAndUpdate(result._id, { potd: true })
                    .then()
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        }
    });
}

function checkForEmail() {
    let today = new Date().getDay();
    if (today == 6) {
        Subscriber.find({})
        .then((result) => {
            let transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                secure: process.env.MAIL_SECURE,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            });
            result.forEach(person => {
                transporter.sendMail({
                    from: "webit@programmer.net",
                    to: person.email,
                    subject: "Your weekly WebIT update!",
                    text: `This is your weekly WebIT update!`,
                    html: `<p>This is your weekly WebIT update!</p>`
                }).then().catch(err => console.log(err));
            });
        })
    }
}

resetAtMidnight();

// Use routes
app.use(indexRoutes);
app.use(subscribeRoutes);
app.use(blogRoutes);

// 404 page
app.use((req, res) => res.status(404).send("404 not found"));
