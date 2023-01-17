
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
 DROP TABLE "books";
 
 CREATE TABLE "books" (
"id" SERIAL PRIMARY KEY, 
"user_id" INTEGER REFERENCES "user", 
"cover" VARCHAR, 
"title" VARCHAR, 
"author" VARCHAR, 
"description" VARCHAR,  
"complete" BOOLEAN DEFAULT FALSE
);