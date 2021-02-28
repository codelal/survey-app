DROP TABLE IF EXISTS answers cascade;

CREATE TABLE answers(
  id SERIAL PRIMARY KEY,
  question_id INT REFERENCES questions(id) NOT NULL,
  answer VARCHAR NOT NULL CHECK (answer != ''),
  participant VARCHAR NOT NULL CHECK (participant != '')
);

INSERT INTO answers (question_id, answer, participant) VALUES (1,'My favorite language is JavaScript', '11111');
INSERT INTO answers (question_id, answer, participant) VALUES (2,'I starded to code a few month ago', '11111');
INSERT INTO answers (question_id, answer, participant) VALUES (3,'I want to learn more about databases and asynchronous code', '11111');
INSERT INTO answers (question_id, answer, participant) VALUES (1,'This is an other answer', '22222');
INSERT INTO answers (question_id, answer, participant) VALUES (2,'This is an other answer', '22222');
INSERT INTO answers (question_id, answer, participant) VALUES (3,'This is an other answer', '22222');