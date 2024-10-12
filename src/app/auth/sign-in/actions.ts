"use server";
import { z, ZodError} from 'zod';
import UsersService from "@/services/Users";
import { redirect } from 'next/navigation';
import { encrypt } from '@/helpers/jwt';
import { createSession } from '@/helpers/session';
import { revalidatePath } from 'next/cache';

export type SignInError = {
    email?: string;
    password?: string;
};

export type SignInState = {
    isValid?: boolean,
    errors: SignInError
};


const validadeSignInformZod = (formData: FormData) => {

   const userSchema = z.object({
    email: z.string().email("Email invalid"),
    password: z.string().min(6, "Password must have at least 6 chars"),
   });

   try 
   {
    userSchema.parse(Object.fromEntries(formData)); 
    return { isValid: true, errors: {} };
   } 
   catch (error: unknown) {
    const isZodError = error instanceof ZodError;

    if(isZodError)
    {
        const { fieldErrors } = error.flatten();

        const errors = Object.keys(fieldErrors).reduce((acc, key) => {
            const message = fieldErrors[key]?.at(0);
            return { ...acc, [key]: message }
        }, {});

        return { isValid: false, errors };
    }

    //console.log(error);
   }

   return { isValid: false, errors: {}};
}

export const handleSignInForm = async (prevState: any, formData: FormData) => {

    const validation = validadeSignInformZod(formData);

   // console.log('passou aqui 2');
    if (!validation.isValid)
    {
       // console.log('passou aqui3');
        return {...prevState, ...validation};
    }

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    const user = await UsersService.signIn(data);

    if (!user)
        return { isValid: false, errors: {} };

    const payload = {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
    }

    const jwt = await encrypt(payload);
    //console.log('jwt', jwt);

    createSession(jwt);
    revalidatePath("/");

    //await UsersService.signUp(data);
    // console.log('usuário localizado', user);
   // 
    return redirect('/');
}