import express, { response } from "express";
import cors from "cors";
import path from "path";
import {db} from "./connect.js";
import { request } from "http";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/artits", async(request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async(request, response) => {
    response.sendFile(path.join(__dirname, "../front-end/dist/index.html"))
});

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
})