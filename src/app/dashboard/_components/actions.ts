'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function addBoard(formData: FormData) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = {
    title: formData.get('title') as string,
    board_img: formData.get('board_img') as string,
    user_id: user?.id as string,
  }

  const { error } = await supabase.from('boards').insert([data]).eq('user_id', user?.id as string)

  revalidatePath('/dashboard', 'layout')
}

export async function deleteBoard(id: number) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();


  const { error } = await supabase.from('boards').delete().eq('board_id', id).eq('user_id', user?.id as string)

  if (error) {
    console.error(error)
  }

  revalidatePath('/dashboard', 'layout')
}

export async function signout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect('/')
}