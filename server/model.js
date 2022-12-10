import mongoose from "mongoose"

const Todo = new mongoose.Schema({
    title: { type: String, require: true},
    completed: {type: Boolean, require: true, default: false}
})

export default mongoose.model('todo', Todo)