import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const TodosLayout = async ({children}: { children: React.ReactNode }) => {
    const token =  (await cookies()).get("token")?.value

    if(!token){
        redirect('/')
    }

  return (
    <div>{children}</div>
  )
}

export default TodosLayout