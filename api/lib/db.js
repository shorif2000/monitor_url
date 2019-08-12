var mysql=require('mysql');
var CryptoJS = require('crypto-js');
var creds = require('./creds');

var bytes  = CryptoJS.AES.decrypt(creds.passwd, creds.key);
var plaintext = bytes.toString(CryptoJS.enc.Utf8);


var connection=mysql.createConnection({
   host:'localhost',
   user:'newsnow',
   password: plaintext,
   database:'newsnow'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  

module.exports = connection; 
