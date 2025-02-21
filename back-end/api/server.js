import express from "express";

import cors from "cors";
/*import { db } from "./connect.js";
import path from "path";
*/

import { artistArray } from "../../front-end/src/assets/database/artists.js";

//const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.get("/artists", async (request, response) => {
  response.send(artistArray);
});

app.use(cors());
 app.use(express.json());

/*app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});*/
/*
app.get("/api/artists", async (request, response) => {
  const artists = await db.collection("artists").find({}).toArray();
  console.log("Artistas encontrados", artists);
  response.send(artists);
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

*/