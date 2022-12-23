require("dotenv").config();  //to call the env file

const express = require("express");

const PORT = process.env.PORT || 5000
const app = express();

const connectDB = require("./dB/connect")

const products_routes = require("./routes/products")

app.get("/", (req, res) => {

    res.send("live live");
});


// middleware or to connect another routes beside app default
app.use("/api/products", products_routes);  //now if /api/product redirects to product_routes

const start = async (req, res) => {
    try {
        await connectDB(process.env.MANGODB_URL);  //connection with mongo data base
        app.listen(PORT, () => {
            console.log(`${PORT} is connected`)
        });
    }
    catch (error) { console.log("Error Solve it") }
}
start();
