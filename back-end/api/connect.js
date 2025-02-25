import {MongoClient} from "mongodb";

const URI = "mongodb+srv://vitordavidps:nIJG80CAhny9EYXv@cluster0.fbeeg.mongodb.net/clone-spotify?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

async function connectDB() {
    try {
        console.log("Tentando conectar ao mongodb...")
        await client.connect(); // Conectar ao banco

        const db = client.db("Clone-Spotify");
        console.log("Banco de dados conectado com sucesso!");
        console.log(db.namespace); // Exibe o nome do banco

        return db;
    } catch (error) {
        console.error("Erro ao conectar ao banco:", error);
    } 
}

connectDB();