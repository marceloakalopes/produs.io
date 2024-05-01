import { User } from "@/types/custom";
import SideBar from "./_components/SideBar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Produs",
  icons: {
    icon: "/favicon.ico",
  }

};

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