const rp = require('request-promise')
const url = "https://dailyepaper.in/the-hindu-pdf-newspaper-free-download/"
const $ = require('cheerio');
const express = require('express');
const scrabRouter = express.Router();

scrabRouter.get('/', async() => {
	rp(url)
		.then(function(html){
			UrlLists = [];
			let NoOfUrl = $('p > a', html).length;
			for (start = 0; start < NoOfUrl; start++){
				UrlLists.push($('p > a', html)[start].attribs.href);
			}
			console.log(UrlLists);
			// console.log($('p > a', html))
		})
		.catch(function(err){
			console.log(err);
		})
})

module.exports = scrabRouter;