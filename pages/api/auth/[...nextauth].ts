import nextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"
import githubProvider from 'next-auth/providers/github';
import googleProvider from 'next-auth/providers/google';

export default nextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    githubProvider({
      clientId: process.env.GIT_CLIENTID as string,
      clientSecret: process.env.GIT_CLIENTSECRET as string
    }),

    googleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_CLIENTSECRET as string
    })
  ],

  secret: process.env.SECRET,
  jwt: {
    secret: process.env.SECRET
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub || '';
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
})