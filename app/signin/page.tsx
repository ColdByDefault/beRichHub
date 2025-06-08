import React from 'react'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'

export default function loginPage(){
  return (
    <main className='h-dvh flex flex-col items-center mt-20
    gap-6 text-3xl p-4'>
        <h1>beRichHub</h1>
        <Button variant="ghost">
          <LoginLink postLoginRedirectURL="/(dashboard)">Sign In </LoginLink>
        </Button>
    </main>
  )
}