const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const dbConnection = require("./config/dbConnectioin");
const bodyParser = require("body-parser");
const cors = require("cors");


dbConnection();
const app = express();
const port = process.env.PORT || 4000;
// app.use = (express.json());
app.use(cors());
app.use(express.json());


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//routes setup

app.use("/api/blog",require("./routes/adminBlogRoutes"));

app.use(errorHandler);


app.listen(port,() => {
    console.log(`${port}`);
})
