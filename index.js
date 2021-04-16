const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
    let {statusCode} = resp
  let contentType = resp.headers['content-type']
  resp.setEncoding('utf-8')
  let data = '';
  let count = 0;

  // parse json data here...
  resp.on('data', (d) => {
    data += [d]
  })
    resp.on('end', () => {

    let parsedData = data.split(",")
    .filter(data =>!data.indexOf(" age="))
    .map(data => data.replace(" age=",""))
    .map(data => parseInt(data))
    .filter(data => {
     if (data >= 50) {
       count++;
            // console.log(data)

       }
     
    }).length
    console.log(count)
  })
  resp.on("error", (e) => {
    console.log("error", e)
  })


});