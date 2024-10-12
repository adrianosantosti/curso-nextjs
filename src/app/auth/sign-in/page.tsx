import { PageWrapper } from "@/components";
import SignInForm from "./SignInForm";
import Link from "next/link";

export default async function SignInPage() {
    return (
        <PageWrapper>
            <div className="flex-center w-full min-h-screen">
                <div className="max-w-[600px] mx-auto border 
                border-slate-800 rounded-lg
                p-8">
                    <h1 className="text-3xl">Log into your account</h1>

                    <SignInForm />

                    <div className="pt-8">
                        <Link href='/auth/sign-up'>{"Don't have an account? Sing up"}</Link>
                    </div>

                </div>
            </div>
        </PageWrapper>
    )
}