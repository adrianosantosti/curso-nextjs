"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignUpForm, SignUpState } from "./actions";

export default function SignUpForm() {

    const initialState: SignUpState = {
        isValid: undefined,
        errors: {name: undefined, email: undefined, password: undefined, passwordConfirmation: undefined}
    };

    const [state, formAction] = useFormState(handleSignUpForm, initialState);
    console.log('passou aqui 4');
    console.log("*** state", state);

    return (
        <form action={formAction}>
            <TextInput name="name" label="Name" error={state.errors?.name}  />

            <TextInput name="email" label="E-mail" inputMode="email" error={state.errors?.email}  />

            <TextInput name="password" label="Password" type="password" error={state.errors?.password} />

            <TextInput name="passwordConfirmation" label="Password confirmation" error={state.errors?.passwordConfirmation}
                type="password" />

            <SubmitButton label="Create account" />
            
        </form>
    )
}