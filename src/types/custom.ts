import { Database } from "./supabase";

export type Board = Database["public"]["Tables"]["boards"]["Row"];
export type User = {
    user_id: string;
    created_at: string;
    name: string;
    email: string;
    profile_img: string;
    plus: boolean;
};