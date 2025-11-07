import React from 'react'
import { Button } from "@/components/ui/button"

const Auth = () => {
  return (
    <div className="w-[20%] flex gap-2 justify-end items-center">
        <Button variant="ghost" className="cursor-pointer">Log in</Button>
        <Button variant="outline" className="cursor-pointer">Create Account</Button>
    </div>
  )
}

export default Auth