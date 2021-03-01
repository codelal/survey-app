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

module.exports.insertQuestions = (surveyId, question) => {
    return db.query(
        `INSERT INTO questions (survey_id, question)
        VALUES($1, $2)
        RETURNING id`,
        [surveyId, question]
    );
};

module.exports.getQuestions = (resultsCode) => {
    return db.query(
        `SELECT surveys.title, questions.question, questions.id FROM questions LEFT JOIN surveys ON questions.survey_id = surveys.id WHERE surveys.results_code = $1 ORDER BY questions.id ASC`,
        [resultsCode]
    );
};

module.exports.insertAnswers = (questionId, answer, participantId) => {
    return db.query(
        `INSERT INTO answers (question_id, answer, participant)
        VALUES($1, $2, $3)
        RETURNING id`,
        [questionId, answer, participantId]
    );
};

module.exports.getAnswers = (resultsCode) => {
    return db.query(
        `SELECT questions.id, answers.answer, answers.participant FROM questions LEFT JOIN surveys ON questions.survey_id = surveys.id JOIN answers ON answers.question_id = questions.id WHERE surveys.results_code = $1 ORDER BY answers.id ASC`,
        [resultsCode]
    );
};

