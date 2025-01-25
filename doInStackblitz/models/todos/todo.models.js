import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    completeMark: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //name from .model(____, ____)
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] //Array of sub-todos
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema) //stores as todos

