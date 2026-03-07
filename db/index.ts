import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@/db/schema";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL missing");
}

const client = neon(process.env.POSTGRES_URL);

export const db = drizzle(client, { schema });
