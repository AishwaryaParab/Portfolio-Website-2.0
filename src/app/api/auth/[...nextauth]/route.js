import User from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
         // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if(user) {
            // if user exists, check password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

            if(isPasswordCorrect) {
              return user
            } else {
              throw new Error("Wrong Credentials!")
            }
          } else {
            throw new Error("User not found!")
          }
        } catch(err) {
          throw new Error(err)
        }
      }
    })
    // ...add more providers here
  ],
  pages: {
    error: "/dashboard/login"
  }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}; // GET for fetching routes and post for routes using username and password