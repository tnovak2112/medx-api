import express from "express";

require("dotenv").config();

const app = express();
const routes = require("./routes/routes");
const cors = require("cors");

const PORT = process.env.API_PORT;

app.use(
  cors({
    origin: ["http://localhost:4200"],
  })
);

app.use(express.json());
app.use("/api/v1", routes.v1);

app.listen(PORT, () => {
  console.log(`Server started successfully`);
  console.log(`Server on port ${PORT}`);
});
