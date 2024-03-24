import { verifyPassword } from "@/apiCalls/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import confirmPasswordSchema from "@/schemas/confirmPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

const Security = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showOutline, setShowOutline] = useState(false);
    const togglePasswordState = (): void => {
        setShowPassword((password) => !password);
    };

    const toggleStyle = (val: boolean): void => {
        setShowOutline(val);
    };

    const form = useForm<z.infer<typeof confirmPasswordSchema>>({
        resolver: zodResolver(confirmPasswordSchema),
        defaultValues: {
            password: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof confirmPasswordSchema>) => {
        const response = await verifyPassword(values.password);
        if(response?.status === 200){
            navigate("/account/reset-password");
        }else{
            alert("Incorrect password")
        }
    }

    return (
        <div className="w-full flex justify-center">
            <Card className="my-10 p-4 w-[300px] rounded-sm">
                <h1 className="text-xl font-extrabold text-center my-6 tracking-widest uppercase">Verify its you</h1>
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
                        </div>
                        <div className="flex items-center flex-col gap-4 my-8">
                            <Button
                                className="w-full"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
};

export default Security;



// Your username is : VBU2020028397 and password is : Prity@123