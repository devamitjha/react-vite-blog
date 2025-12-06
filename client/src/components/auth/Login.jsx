import { useState } from "react";
import { loginUser } from "@/services/userService";
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
import { loginUserData } from "@/redux/slices/userSlice";
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dialog.isLoginOpen);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form.email, form.password);
      console.log("Login success:", data);
      dispatch(loginUserData(data));
      dispatch(closeLogin());
    } catch (err) {
      console.log("Login failed:", err.response?.data || err);
      console.log(err.response?.data.message);
      toast.error(err.response?.data.message);
    }
  };
  return (
    <Dialog open={open} onOpenChange={() => dispatch(closeLogin())}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your details to log in.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4"  onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange}/>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} />
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
