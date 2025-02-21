import axios from "axios";

const URL = "http://localhost:3001/api";

export let artistArray = [];
export let songsArray = [];

async function fetchData() {
  try {
    const responseArtists = await axios.get(`${URL}/artists`);
    const responseSongs = await axios.get(`${URL}/songs`);

    artistArray = responseArtists.data;
    songsArray = responseSongs.data;

    console.log("🎵 Artistas carregados:", artistArray);
    console.log("🎶 Músicas carregadas:", songsArray);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

fetchData();
