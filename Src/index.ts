import express, { Application } from "express";
import cors from "cors";
import dataBase from "../Config/db";
import route from "../Routes/route";

// port
const port: number = 2001;
// Instantiating the Application
const app: Application = express();
// Instantiating middleWares
app.use(express.json());
app.use(cors());
// Instantiating routes
app.use("/api", route);
// initializing DB connection
dataBase();

app.listen(port, () => {
  console.log("Done! on", port);
});
