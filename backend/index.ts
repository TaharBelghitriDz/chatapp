// import dotenv from "dotenv";
// dotenv.config();

// import config from "./config";
import config from "./config";
import app from "./src";

app.listen(config.app.port, () =>
  console.log("server running pn port " + config.app.port)
);
