import NextAuth from "next-auth";
import prisma from "app/(auth)/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";

import { authOptions } from "@/utils/authOptions";


const handler = NextAuth(authOptions);
export {
    handler as GET,
    handler as POST
}

