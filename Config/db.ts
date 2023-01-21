import mongoose, { connection } from "mongoose";

// my style
const lifeUrl: string = "";
const localUrl: string = "mongodb://localhost/auth";
mongoose.connect(localUrl);
mongoose.connection
  .once("open", () => {
    // console.log("connected to", localUrl.toUpperCase());
  })
  .on("error", (error) => {
    // console.log("An error occured in DB", error);
  });

// fellow jo style
export default async function DataBAseFunction() {
  try {
    const connect = await mongoose.connect(localUrl);
    console.log("connected to", localUrl);
  } catch (error) {
    console.log("An error occured in DB", error);
  }
}
