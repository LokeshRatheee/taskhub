import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "../commonUtlis/prisma";
export const authOptions = {
  callbacks: {
    async session({ session, token }) {
      const user = await prisma.user.findFirst({
        where: { email: token.email },
        include: { MasterRole: true },
      });
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.role = user.MasterRole.name;
      session.user.id = user.id;
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/login",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   email: {
      //     label: "Email",
      //     type: "email",
      //     placeholder: "jsmith@gmail.com",
      //   },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = prisma;
        const user = await prisma.user.findUniqueOrThrow({
          where: { email: credentials.email },
          include: { MasterRole: true },
        });

        const isValid =
          req.body.isNewUser == "true"
            ? user.password == credentials.password
            : await verifyPassword(credentials.password, user.password);

        if (isValid) {
          if (user.emailVerified) {
            return user;
          } else {
            throw new Error("you need to first verify your email");
          }
        } else {
          throw new Error("Email/Password is incorrect");
        }
      },
    }),
  ],
};
export default NextAuth(authOptions);