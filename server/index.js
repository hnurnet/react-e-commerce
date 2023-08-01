import express from "express";
import cors from "cors";
import mysql from "mysql";


const app= express();

app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Xaajimacow3321",
    database:"shopping-cart"
})

app.get("/api/products/", (req,res) => {
    const sql = "SELECT * FROM list ";
    db.query(sql, (err,data) => {
        if(err => console.log(err))
        return res.json(data);
    })
})
app.get("/api/products/:id", (req,res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM list WHERE id = ?";
    db.query(sql, id, (err,data) => {
        if(err => console.log(err))
        return res.json(data);
    })
})


app.listen(8800, (req,res) => console.log("Server Connected"));

