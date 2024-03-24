import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Card } from "@/components/ui/card";
import loginSchema from "@/schemas/login.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/apiCalls/auth";
import { AppDispatch } from "@/store/Store";
import { loginFailure, loginSuccess } from "@/store/slices/userSlice";
import { CustomResponse } from "@/types";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [showPassword, setShowPassword] = useState(false);
  const [showOutline, setShowOutline] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const togglePasswordState = (): void => {
    setShowPassword((password) => !password);
  };

  const toggleStyle = (val: boolean): void => {
    setShowOutline(val);
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    const response: CustomResponse | undefined = await login(values);
    if (response?.status === 200) {
      alert("Login successfull");
      navigate("/");
      dispatch(loginSuccess(response.data));
    } else {
      alert(response?.msg);
      dispatch(loginFailure());
    }
  };


  return (
    <div className="w-full flex justify-center">
      <Card className="mb-10 p-4 w-[300px] rounded-sm">
        <h1 className="text-xl font-extrabold text-center my-6 tracking-widest uppercase">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="hello@example.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div
                          onFocusCapture={() => toggleStyle(true)}
                          onBlur={() => toggleStyle(false)}
                          className={`transition-colors flex items-center border rounded-md border-input outline-none ${showOutline ? "ring-1 ring-primary" : "outline-none"}`}
                        >
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="*****"
                            {...field}
                            className="border-0 outline-none focus-visible:ring-0"
                          />
                          <Button
                            onClick={togglePasswordState}
                            type="button"
                            variant="outline"
                            className="border-none outline-none focus-visible:ring-0"
                          >
                            <EyeIcon className=" py-1" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Link
                  to={"/auth/forget-password"}
                  className="text-xs text-right w-full"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="flex items-center flex-col gap-4 my-8">
              <Button
                className="w-full"
                type="submit"
              >
                Submit
              </Button>
              <span className="text-sm text-center">
                Don&apos;t have an account?
                <Link
                  className="font-semibold"
                  to={"/auth/signup"}
                >
                  &nbsp;Signup
                </Link>
              </span>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Login;