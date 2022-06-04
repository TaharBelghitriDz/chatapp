import config from "./src/config";
import app from "./src";

app.listen(config.app.port, () =>
  console.log("server running pn port " + config.app.port)
);
