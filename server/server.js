import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});

app.listen("4040", () => {
  console.log("Server started on port 4040");
});
