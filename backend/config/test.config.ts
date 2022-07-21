import dotenv from "dotenv";
const Mod = Buffer.from("NODE_ENV='test'");
dotenv.parse(Mod);
dotenv.config();

console.log("process.env");
console.log(process.env);

import "./mongo.config";
