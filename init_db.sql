CREATE TABLE "person" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "current_streak" int,
  "word_goal" int,
  "time_goal" int,
  "bio" varchar,
  "friends" array,
  "created_at" datetime DEFAULT (now())
);

CREATE TABLE "genre_types" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar NOT NULL
);

CREATE TABLE "writing_entry" (
  "id" SERIAL PRIMARY KEY,
  "author_id" int,
  "title" varchar,
  "contents" varchar[max],
  "length" int,
  "genre" varchar,
  "submission_time" datetime DEFAULT (now()),
  "time_to_write" time,
  "prompt" varchar,
  "public" boolean
);

CREATE TABLE "prompts" (
  "id" int PRIMARY KEY,
  "prompt_genre" varchar,
  "text" varchar,
  "image_url" varchar,
  "credit_url" varchar
);