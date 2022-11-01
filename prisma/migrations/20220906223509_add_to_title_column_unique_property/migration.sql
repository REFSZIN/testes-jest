/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `memes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "memes_title_key" ON "memes"("title");
