import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card } from "@/components/ui/card";
import addressSchema from "@/schemas/address.schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getCityAndState, setUserAddress } from "@/apiCalls/user";
import { useCallback, useEffect } from "react";
import { CustomResponse } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/Store";
import { setAddress } from "@/store/slices/userSlice";
const Address = () => {
    const {user} = useSelector((state : RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    const form = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            address:user?.shippingDetails?.address ? user?.shippingDetails?.address : "",
            pincode: user?.shippingDetails?.pincode ? user?.shippingDetails?.pincode : "",
        },
    });

    const {
        watch,
        setValue
    } = form;

    const pincode = watch("pincode");

    const fetchStateAndCity = useCallback(async (pincode: string) => {
        if (pincode.length !== 6) {
            return;
        }
        const response = await getCityAndState(pincode);
        if (response?.status === 200) {
            setValue("state", response.data.state);
            setValue("city", response.data.city);
        } else {
            alert("Please Enter a valid pincode");
        }
    }, [setValue]);

    const onSubmit = async (values: z.infer<typeof addressSchema>) => {
        const response: CustomResponse | undefined = await setUserAddress(values);
        if (response?.status === 200) {
            alert("Login successfull");
            dispatch(setAddress(response.data.shippingDetails));
        } 
    };

    useEffect(() => {
        if (pincode.length === 6) {
            fetchStateAndCity(pincode);
        }
    }, [pincode, fetchStateAndCity]);

    return (
        <div className="w-full flex justify-center">
            <Card className="mb-10 p-4 w-[300px] rounded-sm">
                <h1 className="text-xl font-extrabold text-center my-6 tracking-widest uppercase">Login</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="pincode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pincode</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your Pincode"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Address"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>State</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your state"
                                                {...field}
                                                disabled
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="City"
                                                {...field}
                                                disabled
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
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
    )
}

export default Address