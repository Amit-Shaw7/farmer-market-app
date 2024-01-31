import { Cart } from "../../models/cart.model.js";
import asyncHandler from "../../utils/asyncHandler.js";

const addItemToCart = asyncHandler(async (req, res, next) => {
    const userId = await isIDGood(req.userId);
    const cartId = await isIDGood(req.params.cartId);
    const { productId, name, price, quantity, pictures } = req.body;

    const cart = await Cart.findById(cartId);
    if (!cart) throw new ApiError(404, "Cart not found");
    

    cart.products.push({
        productId,
        name,
        price,
        quantity,
        pictures
    });

    const currentItemTotalPrice = quantity * price;
    const newCartValue = cart.totalPrice + currentItemTotalPrice;
    const deliveryCharges = newCartValue > 1000 ? 0 : 120;

    cart.totalPrice = newCartValue;
    cart.deliveryCharge = deliveryCharges;

    await cart.save();

    return res.status(200).json(
        new ApiResponse(200, null, "Item added to cart successfully")
    )
});

export default addItemToCart;