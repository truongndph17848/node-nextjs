import mongoose, { Schema, ObjectId } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String
    },
    pricenew: {
        type: Number
    },
    priceold: {
        type: Number
    },
    img: {
        type: String
    },
    desc: {
        type: String
    },
    status: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true })
ProductSchema.index({'$**': 'text'})
export default mongoose.model("Product", ProductSchema)