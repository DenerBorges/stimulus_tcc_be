/*
  Warnings:

  - You are about to drop the column `reportMessage` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "reportMessage",
ADD COLUMN     "reportMessages" TEXT[] DEFAULT ARRAY[]::TEXT[];
