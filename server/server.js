const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const csurf = require("csurf");
const cookieSession = require("cookie-session");
const uidSafe = require("uid-safe");
const cryptoRandomString = require("crypto-random-string");
const db = require("./db");
// const randomString = cryptoRandomString({
//     length: 6,
// });

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
    const { arrayOfQuestions, title } = req.body;
    let randomString = uidSafe.sync(18);
    // console.log(randomString);

    db.insertSurvey(title, randomString)
        .then(({ rows }) => {
            req.session.surveyId = rows[0].id;
            const surveyId = rows[0].id;
            for (let i = 0; i < arrayOfQuestions.length; i++) {
                db.insertQuestions(surveyId, arrayOfQuestions[i].question)
                    .then(({ rows }) => {})
                    .catch((err) => {
                        console.log("error in insertQuestions", err);
                        res.json({ success: false });
                    });
            }
            res.json({
                success: true,
                randomString: randomString,
            });
        })
        .catch((err) => {
            console.log("error in insertSurvey", err);
            res.json({ success: false });
        });
});

app.get("/api/results/:resultCode", (req, res) => {
    // const { resultCode } = req.params;
    // console.log("api/results/:resultCode", resultCode);
    // get questions + answers//

    res.json({ success: true });
});

app.get("/api/questions/:resultCode", (req, res) => {
    const { resultCode } = req.params;
    //  console.log("resultCode", resultCode);

    db.getQuestions(resultCode)
        .then(({ rows }) => {
            //console.log("rows from get questions", rows);
            const reversedAnswers = rows.reverse();
            console.log(reversedAnswers);
            res.json({
                success: true,
                reversedAnswers,
            });
        })
        .catch((err) => {
            console.log("error in getQuestions", err);
            res.json({ success: false });
        });
});

app.post("/api/answers", (req, res) => {
    const { arrayOfAnswers, surveyId } = req.body;
    console.log(" post /api/answers", arrayOfAnswers, surveyId);
    for (let i = 0; i < arrayOfAnswers.length; i++) {
        db.insertAnswers(surveyId, arrayOfAnswers[i].answer)
            .then()
            .catch((err) => {
                console.log("error in insertAnswers", err);
                res.json({ success: false });
            });
    }
    res.json({
        success: true,
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("Server survey-app is listening.");
});
