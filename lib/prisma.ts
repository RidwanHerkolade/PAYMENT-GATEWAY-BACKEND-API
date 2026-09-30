import "dotenv/config";
import {PrismaClient} from "@/lib/generated/prisma/client";
import {PrismaPg} from "@prisma/adapter-pg"

const connectionString = process.env.DATABASE_URL || "";
if(!connectionString) {
  throw new Error("DATABASE_URL is not define.");
}
const adapter = new PrismaPg(connectionString);
export const prisma = new PrismaClient({
  adapter,
//   log: ["query", "info", "warn", "error"],
});