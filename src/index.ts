import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

const prisma = new PrismaClient();

app.listen(3000)

app.get("/", async(req, res)=>{
    res.status(200).json({
        message: "Hello, World!"
    })
})

app.post("/", async(req, res)=>{
    const user = await prisma.user.create({
        data:{
            name: Math.random().toString(),
            password: Math.random.toString()
        }
    })
    res.status(200).json({
        message: "Post endpoint"
    })
})