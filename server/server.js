const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const csurf = require("csurf");
const cookieSession = require("cookie-session");
const uidSafe = require("uid-safe");
const db = require("./db");

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
    const { arrayOfQuestions, title } = req.body;
    let randomString = uidSafe.sync(18);

    db.insertSurvey(title, randomString)
        .then(({ rows }) => {
            const surveyId = rows[0].id;
            const promises = [];
            for (let i = 0; i < arrayOfQuestions.length; i++) {
                promises.push(
                    db.insertQuestions(surveyId, arrayOfQuestions[i].question)
                );
            }
            Promise.all(promises)
                .then(() => {
                    res.json({
                        success: true,
                        randomString: randomString,
                    });
                })
                .catch((err) => {
                    console.log(
                        "error in insertQuestions in promises.all",
                        err
                    );
                    res.json({ success: false });
                });
        })
        .catch((err) => {
            console.log("error in insertSurvey", err);
            res.json({ success: false });
        });
});

app.get("/api/results/:resultCode", (req, res) => {
    const { resultCode } = req.params;
    console.log("api/results/:resultCode", resultCode);
    db.getQuestions(resultCode)
        .then(({ rows }) => {
            const arrayOfQuestions = rows;
            db.getAnswers(resultCode).then(({ rows }) => {
                const arrayOfAnswers = rows;
                res.json({ success: true, arrayOfQuestions, arrayOfAnswers });
            });
        })
        .catch((err) => {
            console.log("error in getResults", err);
            res.json({ success: false });
        });
});

app.get("/api/questions/:resultCode", (req, res) => {
    const { resultCode } = req.params;
    //  console.log("resultCode", resultCode);

    db.getQuestions(resultCode)
        .then(({ rows }) => {
            res.json({
                success: true,
                rows,
            });
        })
        .catch((err) => {
            console.log("error in getQuestions", err);
            res.json({ success: false });
        });
});

app.post("/api/answers", (req, res) => {
    const { objectOfAnswers } = req.body;
    // console.log("post /api/answers", objectOfAnswers);
    let arrayOfAnswers = Object.entries(objectOfAnswers);
    // console.log(arrayOfAnswers);
    const promises = [];

    for (let i = 0; i < arrayOfAnswers.length; i++) {
        promises.push(
            db.insertAnswers(arrayOfAnswers[i][0], arrayOfAnswers[i][1])
        );
    }
    Promise.all(promises)
        .then(() => {
            res.json({
                success: true,
            });
        })
        .catch((err) => {
            console.log("error in insertAnswers", err);
            res.json({ success: false });
        });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("Server survey-app is listening.");
});
