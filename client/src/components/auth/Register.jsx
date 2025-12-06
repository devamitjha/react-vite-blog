import React, { useState } from "react";
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
import { registerUser } from "@/services/userService";
import { toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dialog.isRegisterOpen);

  // form state
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  // handle inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      toast.success("Registration successful");
      dispatch(closeRegister());
      dispatch(openLogin());
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => dispatch(closeRegister())}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogDescription>
            Fill in your details to register.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <Label htmlFor="full_name">Full Name</Label>
            <Input id="full_name" name="full_name" placeholder="Enter your name" required value={form.full_name} onChange={handleChange} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="Enter your email" required value={form.email} onChange={handleChange} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" required placeholder="Create password" value={form.password} onChange={handleChange} />
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
