import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccessModal = () => {
    // extract paymentId and orderId from query params
    const [searchParams] = useSearchParams();
    const paymentId = searchParams.get("paymentId");
    const orderId = searchParams.get("orderId");


    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col gap-2 items-center">
                <img
                    src="/success.svg"
                    height={120}
                    width={120}
                    className="h-[120px] w-[120px] object-cover my-5"
                    alt="success"
                    loading="lazy"
                />
                {paymentId && <p>Payment Id : {paymentId}</p>}
                {orderId && <p>Order Id : {orderId}</p>}
                <p className="text-xl font-semibold">Payment Successful</p>
                <Button
                    size="sm"
                    variant="link"
                >
                    <Link to="/">
                        <p className="text-base">Continue shopping.</p>
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default PaymentSuccessModal;