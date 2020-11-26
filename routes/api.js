'use strict'
const express = require('express');
const { scraper} = require('../utils/scraping/index')
const {
    createProduct,
    getProducts
} = require("../services/products");

function Api(app) {
    const router = express.Router();
    app.use('/api', router);
    

    router.post('/init', async (req, res, next) => {
        //throw new Error("ERROR GET DATABASE--")
        try {
           const data = await scraper("http://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers")           
           await createProduct(data)    
            res.status(200).json({                
                message: "Se guardo correctamente"
            });
        } catch (err) {
            next(err);
        }
        
        
    });

    router.post("/products", async function (req, res, next) {
        try {
            const product = await getProducts();

            res.status(200).json({
                data: product,
                message: "products"
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = Api;