import express from "express";
import {Repl, extractVariables} from "./repl.js";

const app = express();
//DELETE OR COMMENT OUT HOST
// const host = 'localhost';
const port = 3000;

app.get("/", (req, res) => {
    Repl();
  res.send("hello");
});

app.post("/repl", (req, res) => {
    //not working yet (2 lines below)
    // console.log(req.body);
    // const inputString = req.body.inputString;
    const inputString = "const greeting = 'hello'; const name = 'john'";
    extractVariables(inputString);
    res.send('received');
//   res.send("hello");
});

// Listener DELETE OR DONT ADD HOST PARAM IN LISTENER
app.listen(port, () => {
  console.log(`Budget is listening on port ${port}!`);
});
