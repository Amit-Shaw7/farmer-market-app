"use client"
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import signupSchema from "@/schemas/signup.schema";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/apiCalls/auth";
import { AxiosResponse } from "axios";
import { CustomResponse } from "@/types";

const Signup = () => {
    const router = useRouter();

    const [showOutline, setShowOutline] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const toggleStyle = (val: boolean): void => {
        setShowOutline(val);
    };

    const togglePasswordState = (): void => {
        setShowPassword((password) => !password);
    };

    const onSubmit = async (values: z.infer<typeof signupSchema>) => {
        // console.log(values);
        const response: CustomResponse | undefined = await signup(values);
        // console.log(response);
        if (response?.status === 201) {
            const userId = response?.data?._id;

            // redirect to validate otp pageus
            alert("Signup successfull");
            router.push(`/validateotp/${userId}`);
        } else {
            alert(response?.msg);
        }
    };


    return (
        <div className="w-full flex justify-center">
            <Card className="mb-10 p-4 w-[300px] rounded-sm">
                <h1 className="text-xl font-extrabold text-center my-6 tracking-widest uppercase">
                    Signup
                </h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John doe" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
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
                                                    autoComplete="on"
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
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="9999999999" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex items-center flex-col gap-4 my-8">
                            <Button
                                className="w-full"
                                type="submit"
                            >
                                Submit
                            </Button>
                            <span className="text-sm text-center">
                                Already have an account?
                                <Link
                                    className="font-semibold"
                                    href="/login"
                                >
                                    &nbsp;Login
                                </Link>
                            </span>
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
};

export default Signup;