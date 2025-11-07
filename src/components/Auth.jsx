import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Login from './auth/Login';
import Register from "./auth/Register";
import { useDispatch } from "react-redux";
import { openLogin, openRegister } from "@/redux/slices/dialogSlice";

const Auth = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[20%] flex gap-2 justify-end items-center">
        <Button variant="ghost" className="cursor-pointer" onClick={() => dispatch(openLogin())}>Log in</Button>
        <Button variant="outline" className="cursor-pointer" onClick={() => dispatch(openRegister())}>Create Account</Button>
        <Login/>
        <Register/>
    </div>
  )
}

export default Auth