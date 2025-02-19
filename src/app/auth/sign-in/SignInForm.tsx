"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignInForm, SignInState } from "./actions";

export default function SignInForm() {

    const initialState: SignInState = {
        isValid: undefined,
        errors: {email: undefined, password: undefined}
    };

    const [state, formAction] = useFormState(handleSignInForm, initialState);

    return (
        <form action={formAction}>
            <TextInput name="email" label="E-mail" inputMode="email" error={state.errors?.email}  />

            <TextInput name="password" label="Password" type="password" error={state.errors?.password} />

            <SubmitButton label="Log In" />
        </form>
    )
}