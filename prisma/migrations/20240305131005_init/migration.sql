/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Recipe` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "LoginType" AS ENUM ('Normal', 'GitHub', 'Gmail', 'Facebook');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Agent', 'User');

-- CreateEnum
CREATE TYPE "ProjectCategory" AS ENUM ('Villas', 'Individual_Houses', 'Apartments', 'Plots', 'Grouped_House', 'Gated_Community', 'Semi_Gated_Community', 'Standalone_Building');

-- CreateEnum
CREATE TYPE "ProspectStatus" AS ENUM ('Created', 'Site_Visit', 'Pending', 'Interested', 'NotInterested', 'Bought', 'Dropped', 'Absconded');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('Available', 'Sold_Out');

-- CreateEnum
CREATE TYPE "SiteVisitStatus" AS ENUM ('Requested', 'Rejected', 'Accepted', 'VehicleAllocated', 'Scheduled', 'InProgress', 'Success', 'Failure');

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "email" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "phone" TEXT NOT NULL,
    "password" TEXT,
    "loginType" "LoginType" NOT NULL DEFAULT 'Normal',
    "address" JSONB NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
