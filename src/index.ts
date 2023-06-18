import express from "express";

require("dotenv").config();

const app = express();
const routes = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.API_PORT;

app.use(bodyParser.json({ limit: "10mb" }));

app.use(
  cors({
    origin: [
      "http://localhost:4200",
      "https://localhost:4200",
      "http://medxapp.cl",
      "https://medxapp.cl",
      "www.medxapp.cl",
      "http://www.medxapp.cl",
      "https://www.medxapp.cl",
    ],
  })
);

app.use(express.json());
app.use("/api/v1", routes.v1);

app.listen(PORT, () => {
  console.log(`Server started successfully`);
  console.log(`Server on port ${PORT}`);
});
