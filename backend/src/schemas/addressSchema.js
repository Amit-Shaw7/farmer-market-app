import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
    {
        _id: false,
        address: {
            type: String,
            required: [true, "address is required"]
        },
        city: {
            type: String,
            required: [true, "city is required"]
        },
        state: {
            type: String,
            required: [true, "state is required"]
        },
        pincode: {
            type: String,
            required: [true, "pincode is required"]
        }
    }
);

export default AddressSchema;