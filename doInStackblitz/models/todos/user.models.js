//You need to do: npm i mongoose

import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase: true
            //and so on properties
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            require: [true, "Custom Error Msg"],
        },
        isActive: Boolean
    },
    {timestamps: true} //It will provide the createdAt and updatedAt properties
)

export const User = mongoose.model('User', userSchema)

//This name "User" will converted to pular, lowercase => users
//"Todo" => "todos"

