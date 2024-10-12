import { cookies } from "next/headers";
import { decrypt, encrypt } from "@/helpers/jwt";

const generateExpires = () => {
    const expires = new Date(Date.now() + 60 * 5000);
    return expires;
}

export const createSession = (payload: string) => {
    const expires = generateExpires();
    cookies().set('session', payload, {expires, httpOnly: true});
}

export const getSession = async () => {
    const ss = cookies().get("session")?.value;

    if (!ss) 
        return null;

    //console.log('ssesion', ss);
    // console.log(typeof ss);
    return await decrypt(ss.toString());
}

export const updateSession = async () => {

    const session = await getSession();
    if (!session) return null;

    const expires = generateExpires();
    const jwt = await encrypt({...session, expires });

    const updateSession = {
        name: 'session',
        value: jwt,
        expires,
        httpOnly: true
    };

    return updateSession;
}