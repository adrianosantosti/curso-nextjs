import { cookies } from "next/headers";
import { decrypt, encrypt } from "@/helpers/jwt";

const SESSEION_NAME = "session";

const generateExpires = () => {
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    return expires;
}

export const createSession = (payload: string) => {
    const expires = generateExpires();
    cookies().set(SESSEION_NAME, payload, {expires, httpOnly: true});
}

export const getSession = async () => {
    const ss = cookies().get(SESSEION_NAME)?.value;

    if (!ss) 
        return null;

    return await decrypt(ss.toString());
}

export const updateSession = async () => {

    const session = await getSession();
    if (!session) return null;

    const expires = generateExpires();
    const jwt = await encrypt({...session, expires });

    const updateSession = {
        name: SESSEION_NAME,
        value: jwt,
        expires,
        httpOnly: true
    };

    return updateSession;
}

export const logout = async () => {
    cookies().set(SESSEION_NAME, "", {expires: new Date(0)});
}