import LoginForm from "./_components/LogInForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {

  const supabase = createClient()

  const { data : {user}} = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}