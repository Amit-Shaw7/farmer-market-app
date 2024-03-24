import { Card } from "@/components/ui/card";
import forgetPasswordSchema from "@/schemas/forgetPassword.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { forgetPassword } from "@/apiCalls/auth";

const ForgetPassword = () => {
    const form = useForm<z.infer<typeof forgetPasswordSchema>>({
        resolver: zodResolver(forgetPasswordSchema),
        defaultValues: {
            email: "",
        },
    });


    const onSubmit = async (values: z.infer<typeof forgetPasswordSchema>) => {
        const response = await forgetPassword(values.email);
        if (response?.status === 200) {
            alert("Reset link sent to your email");
        } else {
            alert("Error sending reset password lnk")
        }
    }


    return (
        <div className="w-full flex justify-center">
            <Card className="my-10 p-4 w-[300px] rounded-sm">
                <h1 className="text-xl font-extrabold  text-center my-6 tracking-widest uppercase">Forget password</h1>
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
                        </div>
                        <div className="flex items-center flex-col gap-4 my-8">
                            <Button
                                className="w-full"
                                type="submit"
                            >
                                Submit
                            </Button>
                            <span className="text-sm text-center">
                                Don&apos;t have an account? <Link className="font-semibold" to={"/auth/signup"}>&nbsp;Signup</Link>
                            </span>
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
};

export default ForgetPassword;