DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS urls CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email varchar(255) NOT NULL,
  password VARCHAR(32) NOT NULL
);

CREATE TABLE urls (
  id SERIAL PRIMARY KEY NOT NULL,
  short varchar(16) NOT NULL,
  long varchar(255) NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO “users” (email, password) VALUES(‘first@user.com’, ‘123456’);
INSERT INTO “users” (email, password) VALUES(‘second@user.com’, ’123456’);

INSERT INTO “urls” (short, long, user_id) VALUES (‘abc’, ‘http://www.google.com/’, 1);
INSERT INTO “urls” (short, long, user_id) VALUES (‘abc’, ‘http://www.yahoo.com/’, 2);
