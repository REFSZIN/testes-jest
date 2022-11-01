CREATE TABLE memes (
	id SERIAL PRIMARY KEY,
	"url" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL
);