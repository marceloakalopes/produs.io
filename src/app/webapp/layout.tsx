import { User } from "@/types/custom";
import SideBar from "@/components/custom/SideBar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({children}: {children: React.ReactNode}) {

    const supabase = createClient()

    const {
        data: { user },
      } = await supabase.auth.getUser();
    
      if (!user) {
        return redirect("/login");
      }

      const { error, data } = await supabase.from("Users").select("*").eq("user_id", user.id).single()

      if (error) {
        await supabase.auth.signOut();
        return redirect("/login");
      }

    return (
        <section className="flex h-screen">
            <SideBar user={data as User} />
            {children}
        </section>
    );
}