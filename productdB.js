require("dotenv").config();

const connectDB = require('./dB/connect')

const Product = require('./models/product')

const ProductJson = require("./products.json")//no need to export no nned to name the object//



const start = async () => {
    try {
        await connectDB(process.env.MANGODB_URL);  //connection with mongo data base

        await Product.deleteMany();    //This delete the repetative objects while running many times
        console.log(Product.create(ProductJson))
        await Product.create(ProductJson);

    }
    catch (error) { console.log("Error in db solve it") }
}
start();