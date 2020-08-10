    // var PdfReader = require("pdfreader").PdfReader;
    // new PdfReader().parseFileItems("/home/vakilsearch/Cre@Hive/theHindu.pdf", function(err, item){
    // 	if(err){
    // 		console.log(err);
    // 	}
    // 	else if(item && item.text){
    // 		console.log(item);
    // 	}
    // });

const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('/home/vakilsearch/Cre@Hive/theHindu.pdf');
 
pdf(dataBuffer).then(function(data) {
 	console.log(data.text);
    // // number of pages
    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata); 
    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // // PDF text
    // console.log(data.text); 
        
});

