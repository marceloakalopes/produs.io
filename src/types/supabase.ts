export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Assignments: {
        Row: {
          assignment_id: number
          board_id: number
          created_at: string
          description: string | null
          due_date: string | null
          status: string
          title: string
        }
        Insert: {
          assignment_id?: number
          board_id: number
          created_at?: string
          description?: string | null
          due_date?: string | null
          status: string
          title: string
        }
        Update: {
          assignment_id?: number
          board_id?: number
          created_at?: string
          description?: string | null
          due_date?: string | null
          status?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "Assignments_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["board_id"]
          },
        ]
      }
      boards: {
        Row: {
          board_id: number
          board_img: string | null
          created_at: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          board_id?: number
          board_img?: string | null
          created_at?: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          board_id?: number
          board_img?: string | null
          created_at?: string
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Boards_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Tests: {
        Row: {
          board_id: number
          created_at: string
          test_date: string | null
          test_id: number
          title: string
          topics: string | null
        }
        Insert: {
          board_id: number
          created_at?: string
          test_date?: string | null
          test_id?: number
          title: string
          topics?: string | null
        }
        Update: {
          board_id?: number
          created_at?: string
          test_date?: string | null
          test_id?: number
          title?: string
          topics?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Tests_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["board_id"]
          },
        ]
      }
      "To-Dos": {
        Row: {
          board_id: number
          created_at: string
          description: string | null
          status: string | null
          title: string
          todo_id: number
        }
        Insert: {
          board_id: number
          created_at?: string
          description?: string | null
          status?: string | null
          title: string
          todo_id?: number
        }
        Update: {
          board_id?: number
          created_at?: string
          description?: string | null
          status?: string | null
          title?: string
          todo_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "To-Dos_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["board_id"]
          },
        ]
      }
      Users: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string | null
          profileImg: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          profileImg?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          profileImg?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
