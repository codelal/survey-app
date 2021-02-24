DROP TABLE IF EXISTS surveys cascade;

CREATE TABLE surveys(
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL CHECK (title != ''),
  results_code VARCHAR NOT NULL CHECK (results_code != '')

);


INSERT INTO surveys(title, results_code) VALUES ('Coding-Survey', 'POHUyBmIWwvkmyp1oH8vHl6b');