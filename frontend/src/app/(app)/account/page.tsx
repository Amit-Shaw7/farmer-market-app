import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { dummyUser } from "@/constants";
import { accountPageLinks } from "@/constants/links";
import { dummyPng } from "@/development/dummy";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Account = () => {
    const userDetailsFeilds = [
        {
            name: "Name",
            value: dummyUser.name,
            type: "text",
            id: "name",
        },
        {
            name: "Email",
            value: dummyUser.email,
            type: "email",
            id: "email",
        },
        {
            name: "Phone",
            value: dummyUser.phone,
            type: "tel",
            id: "phone",
        },
        {
            name: "Default Address",
            value: dummyUser.address,
            type: "text",
            id: "address"
        },
        {
            name: "User type",
            value: dummyUser.role,
            type: "text",
            id: "role"
        }
    ];

    return (
        <Container className="my-5 flex flex-col gap-5">
            <Heading text="Your Account" />
            <div className="grid grid-cols-12 gap-3 px-2 mt-2">

                {
                    accountPageLinks.map((link) => (
                        <Link className="col-span-6 sm:col-span-4 lg:col-span-3" href={link.href} key={link.href}>
                            <Card className="flex items-center md:items-start gap-2 p-4 rounded-full sm:rounded-md justify-center sm:justify-start">
                                <Image
                                    src={dummyPng}
                                    alt="Orders"
                                    width={50}
                                    height={50}
                                    className="hidden sm:flex h-[50px] w-[50px] object-contain"
                                />
                                <div className="flex flex-col gap-1 ">
                                    <h3 className="text-xs sm:text-sm font-semibold">
                                        {link.title}
                                    </h3>
                                    <p className="hidden md:flex text-xs text-muted-foreground break-words">
                                        {link.description}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    ))
                }

            </div>

            {/* <div className="grid grid-cols-12 gap-10 mt-20">
                <div className="col-span-12 sm:col-span-5 md:col-span-4 place-self-start bg-red-500 rounded-full">
                    <Image
                        src={dummyPng}
                        alt="Your Picture"
                        height={200}
                        width={200}
                        className="h-[200px] w-[200px] object-contain rounded-full"
                    />
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-8 flex flex-col gap-5">

                    {
                        userDetailsFeilds.map((feild) => (
                            <div className="flex flex-col gap-2" key={feild.id}>
                                <label className="text-sm font-medium" htmlFor={feild.id}>{feild.name}</label>
                                <Input
                                    id={feild.id}
                                    placeholder={feild.name}
                                    type={feild.type}
                                    className="w-full"
                                    defaultValue={feild.value}
                                    disabled
                                />
                            </div>
                        ))
                    }
                </div>
            </div> */}
        </Container>
    );
};
 
export default Account;