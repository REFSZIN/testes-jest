/*
  Warnings:

  - Added the required column `author` to the `memes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "memes" ADD COLUMN     "author" TEXT NOT NULL;
