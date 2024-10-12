"use server";
import { revalidatePath } from 'next/cache';
import { logout } from "@/helpers/session";
import { redirect } from "next/navigation";

export const handleSignOutForm = async () => {

    await logout();
    revalidatePath("/");
    return redirect("/");
}