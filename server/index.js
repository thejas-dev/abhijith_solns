


const express = require('express');
const app = express();

app.get('/',()=>{
	console.log("Welcome")
})

const PORT = process.env.PORT || 3333;

const server = app.listen(PORT,()=>{
	console.log("PORT LISTENING AT" + PORT)
})


module.exports = app;