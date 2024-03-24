import { RootState } from "@/store/Store";
import EachOrder from "./EachOrder";
import { useSelector } from "react-redux";

const Orders = () => {
    const { orders } = useSelector((state: RootState) => state.order);
    return (
        <div className="px-1 sm:px-0">
            {
                orders.length === 0
                    ?
                    <p>No Orders</p>
                    :
                    <div>
                        {
                            orders.map((order) => (
                                <EachOrder
                                    key={order._id}
                                    order={order}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default Orders;