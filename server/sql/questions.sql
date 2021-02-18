DROP TABLE IF EXISTS questions;

CREATE TABLE questions(
  id SERIAL PRIMARY KEY,
  survey_id INT REFERENCES surveys(id) NOT NULL,
  questions VARCHAR NOT NULL CHECK (questions != ''),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
