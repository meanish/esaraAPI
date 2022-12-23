//what to do in the paths


const Product = require("../models/product")


const getAllProducts = async (req, res) => {

    const { company, name, featured } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;     //This portion to avoid null result here if no result diaplays comapany one
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };     //This portion to avoid null result here if no result diaplays name one
    }
    if (featured) {
        queryObject.featured = featured;     //This portion to avoid null result here if no result diaplays name one
    }


    const Products = await Product.find(queryObject)

    res.status(200).json({Products })
}

const getAllProductsTesting = async (req, res) => {
    const Mydata = await Product.find(req.query)       //req.query will now help to search what ever user products/testing/name=MI
    res.status(200).json({ Mydata })
}

module.exports = { getAllProducts, getAllProductsTesting };