"use client"
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import validateOtpSchema from "@/schemas/validateOtp.schema";

const ValidateOtp = () => {
    const form = useForm<z.infer<typeof validateOtpSchema>>({
        resolver: zodResolver(validateOtpSchema),
        defaultValues: {
            otp: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof validateOtpSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
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
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>OTP</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="" {...field} />
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
                                Didn&apos;t recieved OTP?
                                <Link
                                    className="font-semibold"
                                    href="/validateotp"
                                >
                                    &nbsp;Resend OTP
                                </Link>
                            </span>
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
};

export default ValidateOtp;