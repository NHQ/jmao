var from64 = require('js-base64').Base64.fromBase64

module.exports = construct

function construct(ab){

  ab = Buffer._augment(new Int8Array(ab))

  var header = {}
  var body = {}
  var x = 0;

  for(x; x < ab.length; x++){
    if(ab[x] == 59) break
  }
  
  header = JSON.parse(from64(ab.toString('utf8', 0, x)))
  body = ab.slice(x+1)

  console.log(x+1, body.length, ab.length)
/*
  switch(header.type){
    case: 'Object'
    case: ''
    case: ''
    case: ''
    case: ''
    case: ''
    case: ''
    case: ''
    case: ''
    case: ''
    break
  }
*/
  return header


}
