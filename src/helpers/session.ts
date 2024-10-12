import { cookies } from "next/headers";
import { decrypt } from "@/helpers/jwt";

export const createSession = (payload: string) => {
    const expires = new Date(Date.now() + 60*5000);
    cookies().set('session', payload, {expires, httpOnly: true});
}

export const getSession = async () => {
    const ss = cookies().get("session")?.value;

    if (!ss) 
        return null;

    console.log('ssesion', ss);
    // console.log(typeof ss);
    return await decrypt(ss.toString());
}