const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/survey-app"
);

module.exports.insertSurvey = (title, resultsCode) => {
    return db.query(
        `INSERT INTO surveys (title, results_code)
        VALUES($1, $2)
        RETURNING id`,
        [title, resultsCode]
    );
};

module.exports.insertQuestions = (surveyId, questions) => {
    return db.query(
        `INSERT INTO questions (survey_id, questions)
        VALUES($1, $2)
        RETURNING id`,
        [surveyId, questions]
    );
};
