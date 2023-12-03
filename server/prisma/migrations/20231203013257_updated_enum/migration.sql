/*
  Warnings:

  - Changed the type of `accessType` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('ADMIN', 'DOCTOR');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "accessType",
ADD COLUMN     "accessType" "AccessType" NOT NULL;

-- DropEnum
DROP TYPE "AcessType";
