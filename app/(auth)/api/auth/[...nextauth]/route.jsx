import NextAuth from "next-auth";
import prisma from "app/(auth)/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: {url: "https://discord.com/api/oauth2/authorize?client_id=1139956541101977612&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20guilds%20email"},
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {


        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
            }

            if (profile) {
                token.id = profile.id
                token.discriminator = profile.discriminator
                token.username = profile.username
                token.email = profile.email
                token.image = profile.image_url

            }




            return token
        },

        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.id = token.id
            session.discriminator = token.discriminator
            session.username = token.username
            session.email = token.email
            session.image = token.image





            return session
        }
    },
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
    pages: {
        signIn: "/login",
    },
}

const handler = NextAuth(authOptions);
export {
    handler as GET,
    handler as POST,
}

