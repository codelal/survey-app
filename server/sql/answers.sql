DROP TABLE IF EXISTS answers cascade;

CREATE TABLE answers(
  id SERIAL PRIMARY KEY,
  question_id INT REFERENCES questions(id) NOT NULL,
  answer VARCHAR NOT NULL CHECK (answer != ''),
  participant VARCHAR NOT NULL 
  
);
