import {NextApiRequest, NextApiResponse} from "next";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    } // limit to get only

    try {
        const {currentUser} = await serverAuth(req, res);

        return res.status(200).json(currentUser);
        /* use serverAuth to get the current session from the request which we are getting
        * it's gonna check if we logged in and find the user by email and return the user*/
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}