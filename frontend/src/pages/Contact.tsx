import Container from "@/components/Container";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "@/schemas/signup.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import PageHeading from "@/components/PageHeading";


const Contact = () => {
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });
    const onSubmit = async (values: z.infer<typeof signupSchema>) => {
        console.log(values);
        
        // const response: CustomResponse | undefined = await signup(values);
        // if (response?.status === 201) {
        //     const userId = response?.data?._id;

        //     // redirect to validate otp pageus
        //     alert("Signup successfull");
        // } else {
        //     alert(response?.msg);
        // }
    };
    return (
        <Container className="py-5 p-2">
                <PageHeading text="Contact Us" />
                <div className="flex flex-col md:flex-row gap-5 mt-5 justify">
                    <div className="hidden lg:w-[50%] lg:flex items-center">
                        <img
                            src="/contact-us.svg"
                            alt="Contact Us"
                            loading="lazy"
                            className="h-[500px] w-[500px] object-cover rounded-md"
                        />
                    </div>

                    <div className="w-[100%] lg:w-[40%] ">
                        <div className="max-w-[500px] mx-auto">
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
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Issue</FormLabel>
                                                    <FormControl>
                                                        <Textarea className="min-h-[100px] md:min-h-[200px]" cols={12} placeholder="Describe your issue" {...field} />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="flex items-center flex-col gap-4 mt-8">
                                        <Button
                                            className="w-full"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Contact;