import { JWTPayload, SignJWT, jwtVerify } from 'jose';
const JWT_Secret = process.env.JWT_SECRET;

const secretKey = new TextEncoder().encode(JWT_Secret);

export const encrypt = async (payload: JWTPayload) => {

    const result = await new SignJWT(payload)
    .setProtectedHeader({alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime('1 hour from now')
    .sign(secretKey);

    //console.log('encript result', result);
    return result;
}


export const decrypt = async (value: string) => {

    //console.log('valueeeee', value);

    const { payload } = await jwtVerify(value, secretKey, { algorithms: ["HS256"] });
    return payload;
}
