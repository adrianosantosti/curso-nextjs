import { createHash, verifyHash } from "@/helpers/hash";
import Users from "@/libs/database/Users";

type sigInFormsType = {
    email: string,
    password: string
}

const UsersService = {
    signUp: async(data: any) => {

        const passwordHash = await createHash(data.password);

       return await Users.create({...data, password: passwordHash});
    },

    signIn: async (data: sigInFormsType) => {
        const record =  await Users.findByEmail(data.email);

        if (!record) 
            return null;

        // console.log('localizou por email', record);
        // console.log('Password', data.password);
        // console.log('Redord Password', record.password);

        const isValidPassword = await verifyHash(data.password, record.password);
        //console.log('password válido?', isValidPassword? "Sim": "Não");

        if (!isValidPassword)
            return null;

        return { ...record, password: null };
    }
}

export default UsersService;