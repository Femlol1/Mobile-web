const express=require("express")
const collection=require("./mongodb")
const cors = require("cors")
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())