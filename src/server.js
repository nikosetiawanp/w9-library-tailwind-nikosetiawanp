import express from “express”;
import bodyParser from “body-parser”;
import { fileURLToPath } from “url”;
import path, { dirname } from “path”;
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static(“src”));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.get(“/”, (req, res) => {
  const filePath = path.join(__dirname, “./src/index.html”);
  res.sendFile(filePath);
});