const rp = require('request-promise')
const cheerio = require('cheerio');
const url = "https://vk.com/doc562341376_558872592?hash=e14b934d9fe0fbf4ca&dl=c1cbcd08156d428831"

rp(url)
  .then(function(html) {
  	let $ = cheerio.load(html);
    let a = $('#plugin')
    console.log(a.text());
  })
  .catch(function(err) {
    //handle error
  });
