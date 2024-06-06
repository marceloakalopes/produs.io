"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

/**
 * This function is used to sign up a user with an email and password
 * @param {string} signupEmail - The email of the user
 * @param {string} signupPassword - The password of the user
 * @param {string} confirmPassword - The confirmation of the password
 * @returns {Promise<void> | Promise<string>} - Returns a promise that resolves to void or rejects with a string
 */
export async function signup(
  signupEmail: string,
  signupPassword: string,
  confirmPassword: string
): Promise<void | string>{
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: signupEmail,
    password: signupPassword,
    options: {
      emailRedirectTo: "/webapp/dashboard",
    },
  };

  if (signupPassword === confirmPassword) {

    const { error } = await supabase.auth.signUp(data);

    if (error) {
      console.log("error", error);
      redirect("/error");
    }

    redirect("/success");

  } else if (signupPassword !== confirmPassword) {
    return Promise.reject()
  }
}

export async function signupWithGoogle() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}
