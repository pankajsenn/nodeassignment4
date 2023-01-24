const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Hello world!");
})

app.post("/add",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
if(isNaN(num1)||isNaN(num2)){
    res.json({
        status: "failure",
        message : "invalid datatypes"
 })
}
else if (num1>1000000||num2>1000000){
    res.json({
        status: "failure",
        message : "Overflow"
 })
}
else if (num1<-1000000||num2<-1000000){
    res.json({
        status: "failure",
        message : "Underflow"
 })
}
else{
    res.json({
        status: "success",
        message : "the sum of the given two number is",
        sum : num1+num2
 })
}
})


app.post("/sub",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
if(isNaN(num1)||isNaN(num2)){
    res.json({
        status: "failure",
        message : "invalid datatypes"
 })
}
else if (num1>1000000||num2>1000000){
    res.json({
        status: "failure",
        message : "Overflow"
 })
}
else if (num1<-1000000||num2<-1000000){
    res.json({
        status: "failure",
        message : "Underflow"
 })
}
else{
    res.json({
        status: "success",
        message : "the difference of given two numbers",
        sub : num1-num2
 })
}
})


app.post("/multiply",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
if(isNaN(num1)||isNaN(num2)){
    res.json({
        status: "failure",
        message : "invalid datatypes"
 })
}
else if (num1>1000000||num2>1000000){
    res.json({
        status: "failure",
        message : "Overflow"
 })
}
else if (num1<-1000000||num2<-1000000){
    res.json({
        status: "failure",
        message : "Underflow"
 })
}
else{
    res.json({
        status: "success",
        message : "the multiplication of given two numbers",
        multiplication : num1*num2
 })
}
})

app.post("/divide",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
if(isNaN(num1)||isNaN(num2)){
    res.json({
        status: "failure",
        message : "invalid datatypes"
 })
}
else if (num1>1000000||num2>1000000){
    res.json({
        status: "failure",
        message : "Overflow"
 })
}
else if (num1<-1000000||num2<-1000000){
    res.json({
        status: "failure",
        message : "Underflow"
 })
}
else if(num2==0){
    res.json({
        status: "failure",
        message : "Cannot divide by zero"
 })
}
else{
    res.json({
        status: "success",
        message : "the multiplication of given two numbers",
        divide : num1/num2
 })
}
})











app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;