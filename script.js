const mongoose = require('mongoose');
express = require('express');
app=express();
const port = process.env.PORT || 7000;
mongoose.connect("mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam");
//Create Schema
const quizSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    sid:{
        type:String,
        required:true,
    }
});
const Quiz = mongoose.model('Quizes',quizSchema);
app.get('/',(re,res)=>{
    const info = new Quiz({
        name:'Dilraj Manj',
        sid:'300331319',
    });
    Quiz.insertMany([info]);
    res.send('<h2>Collection Added</h2>');
});

app.listen(port,() => {
    console.log(`Server running on port: ${port}`);
})