import { Database } from "./supabase";

export type Board = Database["public"]["Tables"]["boards"]["Row"];
export type User = {
    id: string;
    email: string;
    created_at: string;
    updated_at: string;
};