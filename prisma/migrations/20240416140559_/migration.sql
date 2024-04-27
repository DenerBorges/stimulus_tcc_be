-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "reportMessage" VARCHAR(255) NOT NULL DEFAULT '',
ADD COLUMN     "visible" BOOLEAN NOT NULL DEFAULT true;
