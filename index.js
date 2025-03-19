const express = require("express");
const app = express();
const userRoutes = require("./routes/users");

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(userRoutes);


app.listen(3000, () => {
    console.log("Sunucu http://localhost:3000 adresinde çalışıyor.")
});