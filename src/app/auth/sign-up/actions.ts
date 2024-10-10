"use server";

import UsersService from "@/services/Users";
export type SignUpError = {
    name?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
};

export type SignUpState = {
    isValid?: boolean,
    errors: SignUpError
};

const validadeSignUpform = (formData: FormData) => {

    const errors : SignUpError = {
        name:undefined,
        email:undefined,
        password:undefined,
        passwordConfirmation:undefined,
    };

    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const passwordConfirmation = String(formData.get("passwordConfirmation"));

    try 
    {
        if (!name){
            errors.name = "Name is required";
           // throw new Error(errors.name);
        }

        if (!email){
            errors.email = "Email is required";
           // throw new Error(errors.email);
        }

        if (!email.includes('@')){
            errors.email = "Email is not valid";
            //throw new Error(errors.email);
        }

        if (password.length < 10){
            errors.password = "Password should have 10 chars";
           // throw new Error(errors.password);
        }

        if (!password || password != passwordConfirmation){
            errors.passwordConfirmation = "Password confirmation doesn't match";
           // throw new Error(errors.passwordConfirmation);
        }

        const isValid = Object.values(errors).every((v) => v === undefined);
        //Object.values(errors);

        return {isValid, errors};
    } 
    catch 
    {
        return {isValid: false, errors};
    }
}

export const handleSignUpForm = async (prevState: any, formData: FormData) => {

    //console.log('handleSignUpForm', Object.fromEntries(formData));
    console.log('passou aqui');
    const validation = validadeSignUpform(formData);

    console.log('passou aqui 2');
    if (!validation.isValid)
    {
        console.log('passou aqui3');
        return {...prevState, ...validation};
    }

    const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    const record = await UsersService.signUp(data);
    console.log('usuário incluído', record);

    return { ...prevState, isValid: true};
}