"use client"
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import resetPasswordSchema from "@/schemas/resetPassword.schema";

const ForgetPassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPawssword, setShowConfirmPawssword] = useState(false);
    const [showPasswordOutline, setShowPasswordOutline] = useState(false);
    const [showConfirmPasswordOutline, setShowConfirmPasswordOutline] = useState(false);

    const togglePasswordState = (): void => {
        setShowPassword((showPassword) => !showPassword);
    };
    const toggleConfirmPasswordState = (): void => {
        setShowConfirmPawssword((showConfirmPassword) => !showConfirmPassword);
    };

    const togglePasswordOultine = (val: boolean) => {
        setShowPasswordOutline(val)
    };

    const toggleConfirmPasswordOultine = (val: boolean) => {
        setShowConfirmPasswordOutline(val)
    };

    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: ""
        },
    });


    const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    };


    return (
        <div className="w-full flex justify-center">
            <Card className="mb-10 p-4 w-[300px] rounded-sm">
                <h1 className="text-xl font-extrabold  text-center my-6 tracking-widest uppercase">Reset password</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <div
                                                    onFocusCapture={() => togglePasswordOultine(true)}
                                                    onBlur={() => togglePasswordOultine(false)}
                                                    className={`transition-colors flex items-center border rounded-md border-input outline-none ${showPasswordOutline ? "ring-1 ring-primary" : "outline-none"}`}
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
                            <div className="flex flex-col gap-2">
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div
                                                    onFocusCapture={() => toggleConfirmPasswordOultine(true)}
                                                    onBlur={() => toggleConfirmPasswordOultine(false)}
                                                    className={`transition-colors flex items-center border rounded-md border-input outline-none ${showConfirmPasswordOutline ? "ring-1 ring-primary" : "outline-none"}`}
                                                >
                                                    <Input
                                                        type={showConfirmPawssword ? "text" : "password"}
                                                        placeholder="*****"
                                                        {...field}
                                                        className="border-0 outline-none focus-visible:ring-0"
                                                    />
                                                    <Button
                                                        onClick={toggleConfirmPasswordState}
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
                                    href="/signup"
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

export default ForgetPassword;