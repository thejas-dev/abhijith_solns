


const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const queryRoutes = require("./routes/queryRoutes")

app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: 'https://abhijith-electronics.vercel.app', 
  credentials: true,
}));
app.use('/api/auth',queryRoutes);

app.get('/',(req,res)=>{
	res.send("Welcome")
})

try{
	mongoose.connect("",{
		useNewUrlParser:true,
		useUnifiedTopology:true,
	}).then(()=>{
		console.log("db connected successfully")
	}).catch((err)=>{
		console.log(err);
	});
}catch(ex){
	console.log(ex)
}

const PORT = process.env.PORT || 3333;

const server = app.listen(PORT,()=>{
	console.log("PORT LISTENING AT" + PORT)
})


module.exports = app;
