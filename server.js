const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get("/", (req,res)=>{
    res.render('../views/index');
});
app.get("/sobre", (req,res)=>{
    res.render('../views/sobre');
});
app.get("/contacto", (req,res)=>{
    res.render('../views/contacto');
});

app.listen(8080, ()=>{
    console.log("Server On Port 8080");
});