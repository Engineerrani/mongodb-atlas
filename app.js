const express = require("express");
const app = express();
const db = require("./connection");
const postModel = require("./postModel");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Crud applications

app.post("/", async (req, res) => {
  const { title, content } = req.body;

  try {
    const data = await postModel({ title, content });
    const result = await data.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", async (req, res) => {
  try {
    const result = await postModel.find();
    res.send(result);
    // console.log(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await postModel.findById(id);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const data = await postModel.findByIdAndUpdate(id, { title, content });
    res.json(data);
    console.log(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await postModel.findById(id);
    await data.remove();
    res.json("Deleted succefully");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3003, () => {
  console.log("Listen to 3003");
});
