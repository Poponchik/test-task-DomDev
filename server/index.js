import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Todo from './model.js'
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())

app.put('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);
    res.json(updatedTodo)
  } catch (e) {
    console.log(e)
  }
});

app.post('/', async (req, res) => {
  const { title } = req.body
  try {
    const newTodo = await Todo.create({ title });
    res.json(newTodo)
  } catch (e) {
    console.log(e)
  }
})

app.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.json(deletedTodo)
  } catch (e) {
    console.log(e)
  }
})

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos)
  } catch (e) {
    console.log(e)
  }
})

mongoose.connect('mongodb+srv://liza:li153668@cluster0.1j7wx.mongodb.net/Todo?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));



app.listen(port, () => {
  
});