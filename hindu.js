
const request = require('request')
const fs = require('fs')
const options = {
method: 'GET',
url: 'https://psv4.userapi.com/c856224/u562341376/docs/d18/82cc856b0f74/The_Hindu_30_Jun_2020.pdf?extra=Zj6I3gpRyVQGIjadtNF4CN-19hpr8pzQ04mpXrkTYUqdfXeCReJFF_i78wsRQeSkVOOr3suzbPAbQ7GD7r_-77yED3oCOa9ZWUj_Mz92_RSXDW9T0vPYiUKBQ9Der-6Bl7gKKNoJK2B_hR_d',
headers: {
'content-type': 'application/pdf',
'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
},
encoding: null
}
request(options, function (error, res, body) {
if (error) throw new Error(error)
console.log(body)
fs.writeFileSync('./theHinduhema.pdf', body)
})