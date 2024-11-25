import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts(){
    const db = conexao.db("instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}


export async function createPost(newPost){
    console.log(newPost)
    const db = conexao.db("instabytes")
    const colecao = db.collection("posts")
    return colecao.insertOne(newPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("instabytes");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
}