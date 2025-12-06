import express, { Application } from "express";
import homeRoute from "./routes/home.route";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
