
'use strict';

var express = require("express");
var bodyParser = require('body-parser');
var http = require('https');
var cors = require('cors');
var http_port = process.env.PORT || 3001;

//sample testnet responses

var response_SALE = {
    "transactionID": "100000000",
    "transactionStatus": "Approved",
    "declinedReason": "",
    "pendingTimeout": "0",
    "amount": "100.00",
    "currency": "USD",
    "cryptoCurrency": "USDT",
    "cryptoAmount": "100.00"
}

var response_REFUND = {
    "transactionID": "100000001",
    "transactionStatus": "Refund",
    "declinedReason": "",
    "amount": "100.00",
    "currency": "USD",
    "cryptoCurrency": "USDT",
    "cryptoAmount": "100.00"
}


var initHttpServer = () => {

    var app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        cors();
        next();
    });



    app.use(bodyParser.json());

    app.post('/auth', (req, res) => {

        // var id = req.body.id; //ID is returned, not supplied
        var apiKey = req.body.apiKey;
        var merchantID = req.body.merchantID;
        var merchantDescription = req.body.merchantDescription;
        var customerID = req.body.customerID;
        var customerDescription = req.body.customerDescription;
        var customerCardHash = req.body.customerCardHash;
        var dateTimeStamp = req.body.dateTimeStamp;
        var amount = req.body.amount;
        var currency = req.body.currency;
        var transactionStatus = req.body.transactionStatus;
        var transactionType = req.body.transactionType;
        res.set("Connection", "close");

        res.send(JSON.stringify(response_SALE));

    });


    app.post('/sale', (req, res) => {

        // var id = req.body.id; //ID is returned, not supplied
        var apiKey = req.body.apiKey;
        var merchantID = req.body.merchantID;
        var merchantDescription = req.body.merchantDescription;
        var customerID = req.body.customerID;
        var customerDescription = req.body.customerDescription;
        var customerCardHash = req.body.customerCardHash;
        var dateTimeStamp = req.body.dateTimeStamp;
        var amount = req.body.amount;
        var currency = req.body.currency;
        var transactionStatus = req.body.transactionStatus;
        var transactionType = req.body.transactionType;
        res.set("Connection", "close");

        res.send(JSON.stringify(response_SALE));

    });


    app.post('/refund', (req, res) => {

        var id = req.body.id; //ID of tx to refund
        var apiKey = req.body.apiKey;
        var merchantID = req.body.merchantID;
        var merchantDescription = req.body.merchantDescription;
        var customerID = req.body.customerID;
        var customerDescription = req.body.customerDescription;
        var customerCardHash = req.body.customerCardHash;
        var dateTimeStamp = req.body.dateTimeStamp;
        var amount = req.body.amount;
        var currency = req.body.currency;
        var transactionStatus = req.body.transactionStatus;
        var transactionType = req.body.transactionType;
        res.set("Connection", "close");

        res.send(JSON.stringify(response_REFUND));


    });
    app.listen(http_port, () => console.log('listening for http on port ' + http_port));


}


initHttpServer();
