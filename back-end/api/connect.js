import {MongoClient} from "mongodb";

const URI = "mongodb+srv://vitordavidps:tiR9UYuHH5EK2w0u@cluster0.9ynp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

try {
    await client.connect();
    console.log("Conectado ao MongoDB!")
} catch (error) {
    console.log("Erro: ", error)
}

export const db = client.db("Spotify")