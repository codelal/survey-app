DROP TABLE IF EXISTS answers cascade;

CREATE TABLE answers(
  id SERIAL PRIMARY KEY,
  question_id INT REFERENCES questions(id) NOT NULL,
  answer VARCHAR NOT NULL CHECK (answer != '')
);

INSERT INTO answers (question_id, answer) VALUES (1,'My favorite language is JavaScript');
INSERT INTO answers (question_id, answer) VALUES (2,'I starded to code a few month ago');
INSERT INTO answers (question_id, answer) VALUES (3,'I want to learn more about databases and asynchronous code');
INSERT INTO answers (question_id, answer) VALUES (1,'This is an other answer');
INSERT INTO answers (question_id, answer) VALUES (2,'This is an other answer');
INSERT INTO answers (question_id, answer) VALUES (3,'This is an other answer');