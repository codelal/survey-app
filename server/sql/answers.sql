DROP TABLE IF EXISTS answers cascade;

CREATE TABLE answers(
  id SERIAL PRIMARY KEY,
  question_id INT REFERENCES questions(id) NOT NULL,
  answers VARCHAR NOT NULL CHECK (answers != ''),
  participant VARCHAR NOT NULL CHECK (participant != '')
  
);
