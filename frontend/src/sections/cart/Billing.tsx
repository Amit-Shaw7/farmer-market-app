import { Card } from "@/components/ui/card";
import { CartType } from "@/types";
import { IndianRupee, ReceiptText, Truck } from "lucide-react";


const Billing = ({ cart }: { cart: CartType }) => {
    return (
        <div className="w-full">
            <Card className="p-3 flex flex-col gap-2 shadow-none">
                <h6 className="text-lg font-semibold">Bill Details</h6>

                <div className="flex items-center gap-3">
                    <ReceiptText size={16} />
                    <div className="w-full flex items-center justify-between">
                        <p className="text-sm">Item total </p>
                        <p className="text-price font-semibold flex items-center"><IndianRupee size={12} />{cart?.totalPrice || 0}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Truck size={16} />
                    <div className="w-full flex items-center justify-between">
                        <p className="text-sm">Delivery charge </p>
                        <p className="text-price font-semibold flex items-center"><IndianRupee size={12} />{cart?.deliveryCharge || 0}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-full flex items-center justify-between">
                        <p className="font-semibold">Grand total</p>
                        <p className="font-semibold flex items-center"><IndianRupee size={14} />{cart?.totalPrice + cart?.deliveryCharge || 0}</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Billing;