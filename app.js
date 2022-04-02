const express = require("express");
var fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();


//build a middleware function to serve static files
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log("the app is running ");
});



