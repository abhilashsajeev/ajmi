import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserByEmail, getUserById } from "@/data/user";
import { getAccountByUserId } from "./data/account";

// import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      console.log("Calling link account");
      await db.user.update({
        // @ts-ignore
        where: { email: user?.email },
        data: { activated: "Y" },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // // Allow OAuth without email verification
      // if (account?.provider === "credentials") return true;

      // if (account?.provider === "google") {
      //   console.log("user sign in google", user);
      //   const userItem = getUserByEmail(user.email);
      //   if (userItem) return true;
      //   else {
      //     const result = await db.users.create({
      //       data: {
      //         user_name: user.email,
      //         email: user.email,
      //         is_oauth: true,
      //         password: "",
      //         activated: "Y",
      //         role: "I",
      //       },
      //     });
      //     return true;
      //   }
      // }
      return true;

      // Prevent sign in without email verification
      //   if (!existingUser?.emailVerified) return false;
    },
    //@ts-ignore
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as string;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.picture = token.picture;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      token.role = existingUser.role;
      token.is_oauth = existingUser.is_oauth;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.picture = existingUser.image;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
