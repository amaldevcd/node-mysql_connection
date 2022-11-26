var express = require('express');
var mysql = require('mysql');
var app=express();

var msg="";

var connection = mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '',
    database:'sample',
});

connection.connect(function(error)
{
    if(!!error)
    {
        console.log('Error');
        msg="Error";
    }
    else
    {
        console.log('Connected');
        msg="Connected";
    }
})

app.get('/',(req,res) => {
    
    connection.query("Select * from samptab",function(error,rows,fields){
        if(!!error)
        {
            console.log('Error in Query');
        }
        else
        {
            console.log('Successful Query');
        }
    })
})

app.listen(3000);