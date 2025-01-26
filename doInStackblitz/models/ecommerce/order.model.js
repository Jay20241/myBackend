import mongoose from "mongoose"

//mini-Schema:
const orderItemSchema =  new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity:{
        type: Number,
        require: true
    }
})

//Main-Schema
const orderSchema =  new mongoose.Schema({
    orderPrice: {
        type: Number,
        require: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: {
        //type: Array,
        type: [orderItemSchema],
        /*type: [{
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity:{
                type: Number,
                require: true
            }
        }],*/
        require: true
    },

    address:{
        //You can make seperate schema for the address like: state, pincode etc
        type: String,
        required: true
    },
    //Restricted Field:
    status:{
        type: String,
        //Choices
        enum: ["PENDING","CANCELLED","ON-WAY","DELIVERED"],
        default: "PENDING"
    }


},{timestamps: true})

export const Order = mongoose.model("Order", orderSchema)