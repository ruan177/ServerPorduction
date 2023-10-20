/*
  Warnings:

  - You are about to drop the `courseUsers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `courseUsers` DROP FOREIGN KEY `courseUsers_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `courseUsers` DROP FOREIGN KEY `courseUsers_user_id_fkey`;

-- AlterTable
ALTER TABLE `courses` ADD COLUMN `isAproved` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `courseUsers`;

-- CreateIndex
CREATE UNIQUE INDEX `courses_name_key` ON `courses`(`name`);
