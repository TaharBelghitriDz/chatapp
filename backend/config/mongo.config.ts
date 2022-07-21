import mongoose from "mongoose";
import config from ".";

export default mongoose
  .connect(config.db.url)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
