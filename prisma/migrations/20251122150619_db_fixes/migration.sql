/*
  Warnings:

  - You are about to drop the column `isOpen` on the `Prediction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,date]` on the table `Prediction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Prediction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prediction" DROP COLUMN "isOpen",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "locked" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Prediction_userId_date_key" ON "Prediction"("userId", "date");
