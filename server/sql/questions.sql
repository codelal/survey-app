DROP TABLE IF EXISTS questions cascade;

CREATE TABLE questions(
  id SERIAL PRIMARY KEY,
  survey_id INT REFERENCES surveys(id) NOT NULL,
  question VARCHAR NOT NULL CHECK (question != '')
);
