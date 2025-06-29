// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { PrismaClient } from "@prisma/client";

declare global {
  // prevent multiple instances in dev
  // eslint-disable-next-line no-var -- required for ambient declaration
  var prisma: PrismaClient | undefined;
}

export {};

export const prisma = global.prisma || new PrismaClient({});

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
