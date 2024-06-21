import NavBar from "@/components/custom/NavBar";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <NavBar user={user} />
    </div>
  );
}
