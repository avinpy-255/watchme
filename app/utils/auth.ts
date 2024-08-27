import  NextAuth  from "next-auth";
import {PrismaAdapter}  from "@auth/prisma-adapter";
import Prisma from './db'
import Github from "next-auth/providers/github";
import Nodemailer from "next-auth/providers/email"
import Google from "next-auth/providers/google";


export const { handlers, auth, signIn, signOut } = NextAuth({
        adapter: PrismaAdapter(Prisma),
        providers: [
    Github ({
       clientId: process.env.GITHUB_ID as string,
       clientSecret: process.env.GITHUB_SECRET  as string,
       
    }),
    Google ({
       clientId: process.env.GOOGLE_ID as string,
       clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Nodemailer({
       server: {
         host: process.env.EMAIL_SERVER_HOST,
         port: process.env.EMAIL_SERVER_PORT,
         auth: {
           user: process.env.EMAIL_SERVER_USER,
           pass: process.env.EMAIL_SERVER_PASSWORD,
         },
       },
       from: process.env.EMAIL_FROM,
     }),
    ]

})




