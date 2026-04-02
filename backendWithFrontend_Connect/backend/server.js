import express from "express"
// var cors = require("cors");
import cors from 'cors'

const app = express()

const port = 3000

app.use(cors());


app.get('/home',(req,res)=>{
res.send("heloo ramesh")
})

const jokes = [
  {
    id: 1,
    title: "Programmer vs Nature",
    joke: "Why don’t programmers like nature? Too many bugs.",
  },
  {
    id: 2,
    title: "Java vs C#",
    joke: "Why do Java developers wear glasses? Because they don’t C#.",
  },
  {
    id: 3,
    title: "JavaScript Humor",
    joke: "How do you comfort a JavaScript bug? You console it.",
  },
  {
    id: 4,
    title: "Computer Health",
    joke: "Why did the computer go to the doctor? Because it caught a virus.",
  },
  {
    id: 5,
    title: "Developer Dreams",
    joke: "Why was the developer unhappy at their job? They wanted arrays.",
  },
  {
    id: 6,
    title: "Function Timeout",
    joke: "Why did the function return early? Because it had a timeout.",
  },
  {
    id: 7,
    title: "Favorite Hangout",
    joke: "What is a programmer’s favorite hangout place? The Foo Bar.",
  },
  {
    id: 8,
    title: "Quit Job",
    joke: "Why did the programmer quit his job? Because he didn’t get arrays.",
  },
  {
    id: 9,
    title: "Python vs Java",
    joke: "Why do Python programmers prefer snakes? Because they don’t like Java.",
  },
  {
    id: 10,
    title: "Lazy Laptop",
    joke: "Why did the laptop go to sleep? Because it was tired of working.",
  },
];

app.get('/api/jokes',(req,res)=>{
res.send(jokes)
})

app.listen(port,()=>{
    console.log(`the local host running on ${port}`)
})