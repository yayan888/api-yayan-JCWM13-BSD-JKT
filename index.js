const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

// create database connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '01031993Yan!',
    database: 'toko_ujian',
  });
  
  module.exports = connection;

// connect database
connection.connect((err) =>{
    if(err)
    console.log('MYsql connected');

});

// show all product
app.get('/api-yayan-jcwm13_bsd_jkt/produk' , (req, res) => {
    let sql = "SELECT id,nama_produk,deskripsi,harga,stok FROM produk";
    connection.query(sql, (err, results) => {
        console.log('masuk');
        if(err)res.status(500).send(err);
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// show single produk
app.get('/api-yayan-jcwm13_bsd_jkt/produk/:id' , (req, res) => {
    let sql = "select * from produk where id="+req.params.id;
    connection.query(sql, (err, results) => {
        console.log(results);
        if(err)res.status(500).send(err);
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// update produk
app.get('/api-yayan-jcwm13_bsd_jkt/produk/:id' , (req, res) => {
    let sql = "update produk set nama_produk='"+req.body.nama_produk+"' , harga='"+req.body.harga+"' where id="+req.params.id;
    connection.query(sql, (err, results) => {
        if(err)
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// add new produk
app.get('/api-yayan-jcwm13_bsd_jkt/produk' , (req, res) => {
    let data = {nama_produk: req.body.nama_produk, harga: req.body.harga};
    let sql = "insert into produk set ?";
    connection.query(sql, data, (err, results) => {
        if(err)
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// delete produk
app.get('/api-yayan-jcwm13_bsd_jkt/produk/:id' , (req, res) => {
    let sql = "delete from prouk where id="+req.params.id+"";
    conn.query(sql, (err, results) => {
        if(err)
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});


app.listen(3000, () =>{
    console.log('port 3000');
});

module.exports = app;