import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Reels from "./dbModel.js";

//APP CONFIG
const app = express();
const port = process.env.PORT || 9000; //port

//MIDDLE WARES
app.use(express.json()); //to pass json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB CONFIG
const connection_url =
  "mongodb+srv://admin:reely-mern@cluster0.waqgs.mongodb.net/reely?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API ENDPOINTS
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});

app.get("/v2/posts", (req, res) => {
  Reels.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  //post request is to ADD Data to the database
  //It will let us ADD a video DOCUMENT to the videos collection
  const dbReels = req.body;

  Reels.create(dbReels, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//LISTENER
app.listen(port, () => console.log(`Listening on localhost at: ${port}`));
