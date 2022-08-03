import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {timestamps:true})

export default mongoose.model("Product",ProductSchema)