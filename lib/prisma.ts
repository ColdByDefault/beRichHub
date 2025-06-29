import { PrismaClient } from "@prisma/client";

declare global {
  // prevent multiple instances in dev
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"], // optional, remove in prod
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
