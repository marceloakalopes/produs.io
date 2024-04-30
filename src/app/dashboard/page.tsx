import { createClient } from '@/utils/supabase/server'
import BoardCard from './_components/BoardCard'
import AddNewCard from './_components/AddNewCard';
  

export default async function Dashboard() {

    const supabase = createClient()

    const {
        data: { user },
      } = await supabase.auth.getUser();
    

      const { data, error } = await supabase.from("boards").select().eq("user_id", user?.id);

        if (error) {
            console.error(error);
        }
    


    return (
        <div className='p-10'>
             <div>
                <AddNewCard />
            </div>
            <div className='flex gap-5'>
                {data?.map((board) => (
                        <BoardCard
                        key={board.board_id}
                        title={board.title}
                        board_img={board.board_img}
                        board_id={board.board_id}
                    />
                ))}
            </div>
           
        </div>
    );
}