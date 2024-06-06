import { User } from "@/types/custom";
import SideBar from "@/components/SideBar";
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

    return (
        <section className="flex h-screen">
            <SideBar user={user as User} />
            {children}
        </section>
    );
}