var express=require('express');
var bodyParser = require('body-parser')
var index=[];
var myDB = require ('./mongoDB');
var app=express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })


//set localhost:3000/signup to grab the data from the signup
app.use('/css',express.static('css'));

app.use('/images',express.static('images'));

app.get('/',function(req,res)
{
  res.sendFile(__dirname+'/Index.html');
})

app.get('/Index.html',function(req,res)
{
  res.sendFile(__dirname+'/Index.html');
})

app.get('/SignUp.html',function(req,res){
  //create the sign up page
  res.sendFile(__dirname+'/SignUp.html');
})
app.post('/SignUp.html', urlencodedParser,function(req, res) {
  //get data at req.body

  console.log(req.body)
  //take cvv number
  console.log(req.body.username)
  res.sendFile(__dirname+'/Index.html');
})

//Walk-in
app.get('/Walkin.html',function(req,res){
  //create  a server for the reserved page
  res.sendFile(__dirname+'/Walkin.html');
})
app.post('/Walkin.html', urlencodedParser,function(req, res) {
  //get data at req.body
  console.log(req.body);
  // link with the reservation page
  res.sendFile(__dirname+'/Index.html');

})

//Online Customer
app.get('/SignIn.html',function(req,res)
{
  res.sendFile(__dirname+'/SignIn.html');
})
app.post('/SignIn.html',urlencodedParser,function(req,res){
  console.log(req.body)
  res.sendFile(__dirname+'/SuccessSignIn.html');
})

app.get('/SuccessSignIn.html',function(req,res)
{
  res.sendFile(__dirname+'/SuccessSignIn.html');
})
app.get('/ReservationForm.html',function(req,res){
  //create  a server for the reserved page
  res.sendFile(__dirname+'/ReservationForm.html');
})
app.post('/ReservationForm.html', urlencodedParser,function(req, res) {
  //get data at req.body
  console.log(req.body);
  // link with the reservation page
  res.sendFile(__dirname+'/SuccessSignIn.html');

})

app.get('/EditReservation.html',function(req,res){
  //create  a server for the reserved page
  res.sendFile(__dirname+'/EditReservation.html');
})
app.post('/EditReservation.html', urlencodedParser,function(req, res) {
  //get data at req.body
  console.log(req.body);
  // link with the reservation page
  res.sendFile(__dirname+'/SuccessSignIn.html');

})
//Cancel
app.get('/CancelReservation.html',function(req,res){
  //create  a server for the reserved page
  res.sendFile(__dirname+'/CancelReservation.html');
})
app.post('/CancelReservation.html', urlencodedParser,function(req, res) {
  //get data at req.body
  console.log(req.body);
  // link with the reservation page
  res.sendFile(__dirname+'/CancelSuccess.html');

})

app.get('/CancelSuccess.html',function(req,res){
  res.sendFile(__dirname+'/CancelSuccess.html');
})




module.exports = app;
