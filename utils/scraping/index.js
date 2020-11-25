const puppeteer = require('puppeteer')
const fs = require('fs')

async function scraper(url) {    
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto(url)
        await page.screenshot({
            path: 'screenshot.png',
            fullPage: true,
        })
        const data = await page.evaluate(() => {
            const $reviews = document.querySelectorAll('.zg_homeWidget')
            const data = []
            $reviews.forEach(($review) => {
                $review.querySelectorAll('.zg_rankInfo').forEach(($item) => {

                    data.push({
                        category: $review.querySelector("h3") ? $review.querySelector("h3").textContent : "",
                        position: $item.querySelector('.zg_rank') ? $item.querySelector('.zg_rank').textContent.trim() : "",
                        title: $item.querySelector('.p13n-sc-truncate-desktop-type2') ? $item.querySelector('.p13n-sc-truncate-desktop-type2').textContent.trim() : "",
                        ranking: $item.querySelector('div.a-icon-row.a-spacing-none > .a-size-small') ? $item.querySelector('div.a-icon-row.a-spacing-none > .a-size-small').textContent.trim() : "",
                        textRanking: $item.querySelector('div.a-icon-row.a-spacing-none > .a-link-normal') ? $item.querySelector('div.a-icon-row.a-spacing-none > .a-link-normal').getAttribute('title') : "",
                        img: $item.querySelector('img').getAttribute('src')?  decodeURIComponent($item.querySelector('img').getAttribute('src')) : "",
                    })
                })

            })
            return {
                data: data
            }
        })

        console.log("data -- ", JSON.stringify(data))
        console.log("data -- ", data)
        await browser.close();
    } catch (error) {
        console.error("[error] - ", error);
    }

}

//scraper("http://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers")

module.exports = {
    scraper
}
