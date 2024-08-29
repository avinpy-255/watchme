import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string; // Add the role field to the session user
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string; // Add the role field to the user object
  }
}