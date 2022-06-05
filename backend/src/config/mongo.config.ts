import mongoose from "mongoose";
import config from ".";

mongoose
  .connect(config.db.url as string)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
