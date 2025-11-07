import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector, useDispatch } from "react-redux";
import { closeLogin, openRegister } from "@/redux/slices/dialogSlice";

const Login = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dialog.isLoginOpen);

  return (
    <Dialog open={open} onOpenChange={() => dispatch(closeLogin())}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your details to log in.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="Enter username" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" placeholder="Enter password" />
          </div>
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline" onClick={() => dispatch(closeLogin())}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Login</Button>
          </DialogFooter>
          <p className="text-sm text-center mt-2">
            Don’t have an account?{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => dispatch(openRegister())}
            >
              Register here
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
