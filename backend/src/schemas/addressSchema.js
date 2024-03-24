import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
    {
        _id: false,
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        pincode: {
            type: String,
        }
    }
);

export default AddressSchema;