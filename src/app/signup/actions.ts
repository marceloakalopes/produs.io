"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { createAdminClient } from "@/utils/supabase/admin";

export async function signup(
  signupEmail: string,
  signupPassword: string,
  confirmPassword: string
): Promise<void | string> {
  if (signupPassword !== confirmPassword) {
    return Promise.reject("Passwords do not match");
  }

  const supabase = createClient();

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: signupEmail,
    password: signupPassword,
    options: {
      emailRedirectTo: "/login",
    },
  });

  if (authError) {
    console.error("Authentication error:", authError);
    redirect("/error");
    return Promise.reject("Credenciais inválidas");
  }

  const userId = authData.user?.id;

  if (!userId) {
    console.error("User creation failed, no user ID returned.");
    return Promise.reject("Failed to retrieve user ID.");
  }

  const admin = createAdminClient();
  const { error: dbError } = await admin
    .from("Users")
    .insert([{ user_id: userId, email: signupEmail }]);

  if (dbError) {
    console.error("Database error:", dbError);
    return Promise.reject("Failed to create user in database.");
  }

  redirect("/success");
}
