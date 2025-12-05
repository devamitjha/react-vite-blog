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
import { closeRegister, openLogin } from "@/redux/slices/dialogSlice";

const Register = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dialog.isRegisterOpen);

  return (
    <Dialog open={open} onOpenChange={() => dispatch(closeRegister())}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogDescription>
            Fill in your details to register.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" placeholder="Create password" />
          </div>
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline" onClick={() => dispatch(closeRegister())}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Register</Button>
          </DialogFooter>
          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => dispatch(openLogin())}
            >
              Login here
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
