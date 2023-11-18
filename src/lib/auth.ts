import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { env } from "@/env/server";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),

  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
  ],

   pages: {
    signIn: "/auth/signin",
  },

  secret: env.NEXTAUTH_SECRET,
};
