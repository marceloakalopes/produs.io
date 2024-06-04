'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(loginEmail: string, loginPassword: string) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: loginEmail,
    password: loginPassword,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return Promise.reject(error)
  } else {
    // redirect to the dashboard
    revalidatePath('/dashboard', "layout")
    redirect('/dashboard')
  }
}


