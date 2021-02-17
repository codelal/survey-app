const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const csurf = require("csurf");
const cookieSession = require("cookie-session");
const uidSafe = require("uid-safe");


// const config = require("./config.json"); //file upload

// const db = require("./db");

app.use(compression());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

const cookieSessionMiddleware = cookieSession({
    secret: `pure being and pure nothing are the same.`,
    maxAge: 1000 * 60 * 60 * 24 * 14,
});

app.use(cookieSessionMiddleware);


app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(express.static(path.join(__dirname, "..", "client", "public")));


// app.get("/creators", (req, res) => {
//     if (req.session.userId) {
//         res.redirect("/");
//     } else {
//         res.sendFile(path.join(__dirname, "..", "client", "index.html"));
//     }
// });

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});




app.listen(process.env.PORT || 3001, function () {
    console.log("Server survey-app is listening.");
});
