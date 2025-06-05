import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import DBconnection from './db/db.js';
dotenv.config() ;
const PORT = process.env.PORT ; 
const app = express() ; 


app.use(cors()) ; 
app.use(express.json()) ;

app.get('/',(req,res)=>{
    res.send('Welcome to the backend of SkillsLink');
})

DBconnection() ;

app.listen(PORT,()=>{
    console.log(`we have successfully connnected to the port ${PORT}`);
    
})