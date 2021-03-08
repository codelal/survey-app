DROP TABLE IF EXISTS questions cascade;

CREATE TABLE questions(
  id SERIAL PRIMARY KEY,
  survey_id INT REFERENCES surveys(id) NOT NULL,
  question VARCHAR NOT NULL CHECK (question != '')
);


INSERT INTO questions(survey_id, question) VALUES (1, 'What is you favorite Coding-language?');
INSERT INTO questions(survey_id, question) VALUES (1, 'How much experience do you have?');
INSERT INTO questions(survey_id, question) VALUES (1, 'What do you want to learn next?');