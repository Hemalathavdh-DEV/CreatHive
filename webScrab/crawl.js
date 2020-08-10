const request = require('request')
const fs = require('fs');
const express = require('express');
const downloadRouter = express.Router();

// downloadRouter.get('/', async() =>{
//     const url = 'https://psv4.userapi.com/c856228/u562341376/docs/d2/46d1d79e3a47/Chennai_TheHindu_09-06-2020.pdf?extra=YQR7WPYKmiBrx8PiWATC0mRkiAVpzBXyw41L29Dr4P5TNSNxrOvZhsg0EzK6ohipLFMIoGiEoqBTMjyoIwLPza4ETcKdSlWIeGLt4MgFo8wt_obqywM-1S_SOP-_Ij73p-5LwkUWx7ZfcGY'
//     const path = Path.resolve(__dirname, 'files', 'filenew.pdf')
//     const writer = fs.createWriteStream(path);

//     const response = await Axios({
//         url,
//         method: 'GET',
//         responseType: 'stream',
//         contentType: 'application/pdf',
//         userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
//     })
//     console.log(response)
//     response.data.pipe(writer)
//     return new Promise((resolve, reject) =>{
//         writer.on('finish', resolve)
//         writer.on('error', reject)
//     })
// })
let file = fs.createWriteStream(`file.pdf`);
downloadRouter.get('/', async()=> {
        let options =  {
            uri: 'https://psv4.userapi.com/c856224/u562341376/docs/d18/82cc856b0f74/The_Hindu_30_Jun_2020.pdf?extra=Zj6I3gpRyVQGIjadtNF4CN-19hpr8pzQ04mpXrkTYUqdfXeCReJFF_i78wsRQeSkVOOr3suzbPAbQ7GD7r_-77yED3oCOa9ZWUj_Mz92_RSXDW9T0vPYiUKBQ9Der-6Bl7gKKNoJK2B_hR_d',
            method: 'GET',
            headers: {
                'content-type': 'application/pdf',
                "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
                "Accept": "text/css,*/*;q=0.1",
                "Accept-Language": "en-US,en;q=0.5",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                "Cookie": "remixlang=3"
                },
            gzip: true,
            encoding: null
        }
        request(options, function(error, res, body){
            if(error) throw new Error(error)
            console.log(body);
            fs.writeFileSync("theHinduHemacheck.pdf", body)
        })
    })
// console.log("hii!")
// request("https://dailyepaper.in/the-hindu-pdf-newspaper-free-download/")
//     .then(function(body){
//         console.log(body);
//     })
//     .catch(function(err){
//         console.log("Error in processing request");
//     })
module.exports = downloadRouter;
