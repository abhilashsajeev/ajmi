import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: string;
  is_oauth: boolean;
  picture?: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
