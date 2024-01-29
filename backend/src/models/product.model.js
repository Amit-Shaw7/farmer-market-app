import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true,
        },
        description : {
            type : String,
            required : true,
            trim : true,
        },
        price : {
            type : Number,
            required : true,
        },
        picture : [
            {
                type : String,
                trim : true
            }
        ],
        sellerId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
        },
        sellerName : {
            type : String,
            trim : true,
        },
        category : {
            type : String,
            required : true,
            trim : true,
            enum : ["Machines" , "Equipments" , "Seeds" , "Fertilizers" , "Pesticides" , "Fruits" , "Vegetables" , "Animals" , "Cereals" , "Diary"],
        },
        stock:{
            type : Number,
            required : true,
        },
        keyFeatures : [
            {
                type : String,
                trim : true
            }
        ]
    },
    {
        timestamps : true
    }
);

export const Product = mongoose.model("Product" , ProductSchema);