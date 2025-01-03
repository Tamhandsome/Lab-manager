/*
  Warnings:

  - You are about to drop the column `createdTime` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deleteFlag` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hanId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdTime",
DROP COLUMN "deleteFlag",
DROP COLUMN "email",
DROP COLUMN "hanId",
DROP COLUMN "name",
DROP COLUMN "updatedTime",
DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
