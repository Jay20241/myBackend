import mongoose from "mongoose"

const productSchema =  new mongoose.Schema({
   
    description: {
        require: true,
        type: String,
    },
    name: {
        type: String,
        require: true,
    },
    productImage: {
        type: String //Images, PDFs are mostly stored in AWS or Cloudinary, which gives the url.
        //Don't store in database, becoz it becomes very heavy
    },
    price:{
        type: Number,
        default: 0
    },
    stock:{
        defalut: 0,
        type: Number
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        require: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    //New example or Array:
    someField: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]


}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)