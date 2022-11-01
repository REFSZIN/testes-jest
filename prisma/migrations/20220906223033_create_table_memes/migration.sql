-- CreateTable
CREATE TABLE "memes" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "memes_pkey" PRIMARY KEY ("id")
);
