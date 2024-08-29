import { NextAuthOptions }  from "next-auth";
import {PrismaAdapter}  from "@auth/prisma-adapter";
import prisma from './db'
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";



export const authOptions = {
        adapter: PrismaAdapter(prisma) as Adapter ,
        providers: [
    Github ({
       clientId: process.env.GITHUB_ID as string,
       clientSecret: process.env.GITHUB_SECRET  as string,
       
    }),
    Google ({
       clientId: process.env.GOOGLE_ID as string,
       clientSecret: process.env.GOOGLE_SECRET as string,
    }),
],
callbacks: {
  async session({ session, user }) {
   
    session.user.role = user.role;
    return session;
  },
},
   

} satisfies NextAuthOptions




