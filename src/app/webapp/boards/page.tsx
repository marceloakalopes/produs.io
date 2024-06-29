import { createClient } from "@/utils/supabase/server";
import AddNewCard from "./_components/AddNewCard";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Quadros - Produs",
  icons: {
    icon: "/favicon.ico",
  },
};

enum difficulty {
  EASY = "Fácil",
  MEDIUM = "Médio",
  HARD = "Difícil",
}

// Dynamically import BoardCard
const BoardCard = dynamic(() => import("./_components/BoardCard"), {
  loading: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ), // Optional: Add a loading fallback
  ssr: false, // Disable server-side rendering for this component
});

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: boards, error: boardsError } = await supabase
    .from("boards")
    .select()
    .eq("user_id", user?.id);

  if (boardsError) {
    console.error("Error fetching boards:", boardsError);
    return <div>Error fetching boards</div>;
  }

  // Fetch related data for tasks, assignments, and tests
  const { data: tasks, error: tasksError } = await supabase
    .from("To-Dos")
    .select("board_id");

  const { data: assignments, error: assignmentsError } = await supabase
    .from("Assignments")
    .select("board_id");

  const { data: tests, error: testsError } = await supabase
    .from("Tests")
    .select("board_id");

  if (tasksError || assignmentsError || testsError) {
    console.error(
      "Error fetching related data:",
      tasksError,
      assignmentsError,
      testsError
    );
    return <div>Error fetching related data</div>;
  }

  const boardCounts = boards.map((board) => {
    const taskCount = tasks.filter(
      (task) => task.board_id === board.board_id
    ).length;
    const assignmentCount = assignments.filter(
      (assignment) => assignment.board_id === board.board_id
    ).length;
    const testCount = tests.filter(
      (test) => test.board_id === board.board_id
    ).length;

    return {
      ...board,
      taskCount,
      assignmentCount,
      testCount,
    };
  });

  return (
    <div className="block max-lg:flex max-lg:flex-col max-lg:items-center inset-0 z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <AddNewCard />
      <div className="grid gap-y-12 grid-cols-4 max-lg:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3">
        {boardCounts.map((board) => (
          <BoardCard
            key={board.board_id}
            title={board.title}
            board_img={board.board_img}
            board_id={board.board_id}
            difficulty={difficulty[board.difficulty as keyof typeof difficulty]}
            next_test="5 de agosto"
            tasks={board.taskCount}
            assignments={board.assignmentCount}
            tests={board.testCount}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}
