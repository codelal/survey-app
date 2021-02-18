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
        VALUES($1, $3)
        RETURNING id`,
        [surveyId, question]
    );
};

module.exports.getQuestions = (surveyId) => {
    return db.query(
        `SELECT surveys.title, questions.question FROM questions LEFT JOIN surveys ON questions.survey_id = surveys.id WHERE questions.survey_id=($1) ORDER BY questions.id DESC`,
        [surveyId]
    );
};

// module.exports.getProfileData = (userId) => {
//     return db.query(
//         `SELECT users.first, users.last, users.email, user_profiles.age, user_profiles.url, user_profiles.city
//         FROM user_profiles
//         LEFT JOIN  users
//         ON user_profiles.user_id = users.id 
//         WHERE user_profiles.user_id = ($1)`,
//         [userId]
//     );
// };
