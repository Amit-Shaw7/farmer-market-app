import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        pictures: [
            {
                type: String,
                trim: true
            }
        ],
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        sellerName: {
            type: String,
            trim: true,
        },
        sellerType: {
            type: String,
            required: true,
            trim: true,
            enum: ["FARMER", "DEALER", "SHOPKEEPER"],
        },
        category: {
            type: String,
            required: true,
            trim: true,
            enum: ["MACHINES" , "EQUIPMENTS" , "SEEDS" , "FERTILIZERS" , "PESTICIDES" , "FRUITS" , "VEGETABLES" , "ANIMALS" , "CEREALS" , "DIARY"],
        },
        stock: {
            type: Number,
            required: true,
        },
        keyFeatures: [
            {
                type: String,
                trim: true
            }
        ]
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model("Product", ProductSchema);
