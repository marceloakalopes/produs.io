import { createClient } from "@/utils/supabase/server";
import BoardCard from "./_components/BoardCard";
import AddNewCard from "./_components/AddNewCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quadros - Produs",
  icons: {
    icon: "/favicon.ico",
  }

};

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("boards")
    .select()
    .eq("user_id", user?.id);

  if (error) {
    console.error(error);
  }

  return (
    <div className="block max-lg:flex max-lg:flex-col max-lg:items-center inset-0 z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <AddNewCard />
      <div className="grid gap-y-12 grid-cols-4 max-lg:grid-cols-1 max-xl:grid-cols-2  max-2xl:grid-cols-3">
        {data?.map((board) => (
          <BoardCard
            key={board.board_id}
            title={board.title}
            board_img={board.board_img}
            board_id={board.board_id}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}
