import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const PaymentMethod = ({
    paymentMethod,
    setPaymentMethod
}: {
    setPaymentMethod: (value: string) => void,
    paymentMethod: string
}) => {
    return (
        <div className="w-full">
            <Card className="p-3 flex gap-2 shadow-none justify-between">
                <h6 className="text-lg font-semibold">Payment</h6>
                <Select
                    onValueChange={(value) => setPaymentMethod(value)}
                    defaultValue={paymentMethod}
                >
                    <SelectTrigger type="button" className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="COD">COD</SelectItem>
                        <SelectItem value="ONLINE">Online</SelectItem>
                    </SelectContent>
                </Select>
            </Card>
        </div>

    );
};

export default PaymentMethod;