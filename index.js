const express =require('express');
const app=express();
const port =8000;

//to serve inex file
app.use(express.static("code"));

app.listen(port, ()=>{
    console.log(`app started on ${port}`)
});