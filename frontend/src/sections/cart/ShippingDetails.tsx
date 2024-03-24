import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShippingDetails = ({ user }: { user: User }) => {
    const [addressExist, setAddressExist] = useState(false);
    console.log(user.shippingDetails);

    useEffect(() => {
        if (user?.shippingDetails?.pincode !== "") {
            setAddressExist(true);
        }
    }, [user]);

    return (
        <Card className="p-3 shadow-none">
            <CardContent className="m-0 p-0">
                <h6 className="text-lg font-semibold">Shipping Details</h6>
                {
                    addressExist ? (
                        <div>
                            <p className="text-muted-foreground text-sm">{user?.shippingDetails?.address}</p>
                            <p className="text-muted-foreground text-sm">{user?.shippingDetails?.city}</p>
                            <p className="text-muted-foreground text-sm">{user?.shippingDetails?.state}</p>
                            <p className="text-muted-foreground text-sm">{user?.shippingDetails?.pincode}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <p className="text-muted-foreground text-sm">Looks like you haven't added your shipping details</p>
                            <Button
                                variant="link"
                                size="sm"
                                className="self-end px-0 py-0 mt-2 h-max"
                            >
                                <Link to="/account/address" className="text-primary text-sm">
                                    Add
                                </Link>
                            </Button>
                        </div>
                    )
                }
            </CardContent>
        </Card>
    );
};

export default ShippingDetails;