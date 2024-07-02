'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { profile } from 'console'

export async function addBoard(formData: FormData) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const boardImg = await fetch(`https://api.unsplash.com/photos/random?query=${formData.get('title') as string}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
  console.log(boardImg)

  const data = {
    title: formData.get('title') as string,
    user_id: user?.id as string,
    board_img: boardImg.url as string,
  }

  const { error } = await supabase.from('boards').insert([data]).eq('user_id', user?.id as string)

  revalidatePath('/webapp/boards', 'layout')
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