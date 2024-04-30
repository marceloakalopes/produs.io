import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <nav className="flex p-10 justify-around">
        <div>
          <img className="w-20" src="/logo.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          {user ? (
            <div className="flex items-center justify-center">
              <Link
              className="p-4 rounded-lg text-white bg-black font-bol"
              href="/dashboard"
            >
              Dashboard
            </Link>
            </div>
          ) : (
            <div className="flex gap-5 items-center justify-center">
              <Link className="font-semibold" href="/login">Entrar</Link>
              <Link
                className="p-3 rounded-lg text-white bg-black font-semibold"
                href="/signup"
              >
                Criar conta
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
