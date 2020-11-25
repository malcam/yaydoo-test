'use strict'
const express = require('express');
const { scraper} = require('../utils/scraping/index')
function Api(app) {
    const router = express.Router();
    app.use('/api', router);
    router.post('/', async (req, res) => {
        //throw new Error("ERROR GET DATABASE--")
        try {
            await scraper("http://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers")    
            res.send(`API v2`);
        } catch (error) {
            res.send(error)
        }
        
        
    });
}

module.exports = Api;