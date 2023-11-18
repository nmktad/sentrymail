import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
    server: {
        DATABASE_HOST: z.string().min(1),
        DATABASE_USERNAME: z.string().min(1),
        DATABASE_PASSWORD: z.string().min(1),

        GITHUB_ID: z.string().min(1),
        GITHUB_SECRET: z.string().min(1),

        GOOGLE_ID: z.string().min(1),
        GOOGLE_SECRET: z.string().min(1),

        JWT_SECRET: z.string().min(1),
        NEXTAUTH_SECRET : z.string().min(1),
    },

    runtimeEnv: {
        DATABASE_HOST: process.env.DATABASE_HOST,
        DATABASE_USERNAME: process.env.DATABASE_USERNAME,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,

        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,

        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,

        JWT_SECRET: process.env.JWT_SECRET,
        NEXTAUTH_SECRET : process.env.NEXTAUTH_SECRET,
    },
});
