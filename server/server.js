const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const csurf = require("csurf");
const cookieSession = require("cookie-session");
const uidSafe = require("uid-safe");
const cryptoRandomString = require("crypto-random-string");
const db = require("./db");
const randomString = cryptoRandomString({
    length: 6,
});

// const config = require("./config.json"); //file upload

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

app.post("/api/create-survey", (req, res) => {
    const { questions, title } = req.body;
    //console.log("data", questions);
    // const resultsCode = randomString;
    // console.log("randomString", randomString);

    db.insertSurvey(title, randomString)
        .then(({ rows }) => {
            const surveyId = rows[0].id;
            db.insertQuestions(surveyId, questions).then(({ rows }) => {
                // console.log(rows);
                res.json({ success: true, randomString: randomString });
            });
        })
        .catch((err) => {
            console.log("error in insertQuestions", err);
            res.json({ success: false });
        })
        .catch((err) => {
            console.log("error in insertSurvey", err);
            res.json({ success: false });
        });
});

app.get("/api/results/:resultCode", (req, res) => {
    // const { resultCode } = req.params;
    // console.log("api/results/:resultCode", resultCode);
    //get questions + answers//
    res.json({ success: true });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("Server survey-app is listening.");
});
