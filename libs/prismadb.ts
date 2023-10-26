import {PrismaClient} from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;// env check
// prevent the hot reload error while using prisma
export default client;