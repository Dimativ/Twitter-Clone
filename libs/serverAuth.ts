import {NextApiRequest} from "next";
import {getSession} from "next-auth/react";

import prisma from "@/libs/prismadb";

const serverAuth = async (req: NextApiRequest)=> {
    const session = await getSession({req});
    // is user Logged in
    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }
    // otherwise find our current user using the email
    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    // if we don't have the current user
    if (!currentUser) {
        throw new Error('Not signed in');
    }

    return {currentUser};
}

export default serverAuth;