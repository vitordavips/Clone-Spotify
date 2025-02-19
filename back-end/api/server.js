import express from "express";
import cors from "cors";
import path from "path";

const _dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/",(request, response) => {
    response.send("
}