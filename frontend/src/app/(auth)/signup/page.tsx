"use client"
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import signupSchema from "@/schemas/signup.schema";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

const Signup = () => {
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
    }

    const togglePasswordState = (): void => {
        setShowPassword((password) => !password);
    }

    const onSubmit = async (values: z.infer<typeof signupSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <div className="w-full flex justify-center">
            <Card className="mb-10 p-4 w-[300px] rounded-sm">
                <h1 className="text-3xl font-extrabold text-center my-6 tracking-widest uppercase">Signup</h1>
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
                                        <FormMessage className="text-xs"/>
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
                                        <FormMessage className="text-xs"/>
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
                        </div>

                        <div className="flex items-center flex-col gap-4 my-8">
                            <Button
                                className="w-full"
                                type="submit"
                            >
                                Submit
                            </Button>
                            <span className="text-sm text-center">
                                Already have an account? <Link className="font-semibold" href="/login">&nbsp;Login</Link>
                            </span>
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
};

export default Signup;