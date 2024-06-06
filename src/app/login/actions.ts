'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(loginEmail: string, loginPassword: string) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const loginData = {
    email: loginEmail,
    password: loginPassword,
  }

  const { data, error } = await supabase.auth.signInWithPassword(loginData)

  if (error) {
    return Promise.reject(error)
  } else {
    // redirect to the dashboard
    revalidatePath('/webapp/dashboard', "layout")
    redirect('/webapp/dashboard')
  }
}

export async function loginWithGoogle() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: "http://localhost:3229/webapp/dashboard",
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
}


