import { getUserOrders } from "@/apiCalls/order";
import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import Orders from "@/sections/orders/Orders";
import { AppDispatch } from "@/store/Store";
import { setOrderState } from "@/store/slices/orderSlice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const Demo = () => {
    const dispatch = useDispatch<AppDispatch>();

    const fetchAllOrders = useCallback(async () => {
        const response = await getUserOrders();
        if (response?.status === 200) {
            dispatch(setOrderState(response.data));
        }
    }, [dispatch]);

    useEffect(() => {
        fetchAllOrders();
    }, [fetchAllOrders]);
    
    return (
        <Container className="py-5">
                <PageHeading
                    text="My Orders"
                    showButton={false}
                />
                <Orders />
        </Container >
    )
}

export default Demo