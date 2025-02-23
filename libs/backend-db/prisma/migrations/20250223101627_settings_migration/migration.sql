-- CreateEnum
CREATE TYPE "ThemeEnum" AS ENUM ('LIGHT', 'DARK', 'SYSTEM');

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "theme" "ThemeEnum" NOT NULL DEFAULT 'LIGHT',
    "notification" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "settings_userId_key" ON "settings"("userId");

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
