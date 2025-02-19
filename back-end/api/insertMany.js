import {artistArray} from "../../front-end/src/assets/database.js";
import {songsArray} from "../../front-end/src/assets/database/songs.js";
import {db} from "./connect.js";


const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj};
    delete newArtistArray.id;

    return newArtistObj;
});

const newSongsArray = songsArray.map((currentArtistObj) => {
  const newSongObj = {...currentArtistObj};
  delete newSongObj.id;
  
  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db.collection("artists").insertMany(newArtistArray);

console.log(responseArtists);
console.log(responseSongs);