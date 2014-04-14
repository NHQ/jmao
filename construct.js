var from64 = require('js-base64').Base64.fromBase64

module.exports = construct

function construct(ab){
  ab = Buffer._augment(new Int8Array(ab))
  var buf = new Buffer(new Int8Array(ab))
  var header = {}
  var body = {}
  var x = 0;

  for(x; x < ab.length; x++){
    if(ab[x] == 59) break
  }
  
  header = JSON.parse(from64(ab.toString('utf8', 0, x)))
  console.log(header)
  body = ab.slice(x+1)
  console.log(body.toString())
  switch(header.type){
    case 'String':
    case 'RegExp':
    // the strings
      
      body = ab.toString('utf8', x + 1, ab.length - 1)
      if(header.type == 'RegExp'){
        body = body.slice(1, body.length -2)
      }
      
      body = new Function([], 'return new '+header.type+'(\''+body+'\')')()
    break;
    case 'Function':
      body = new Function(header.arguments.split(','), body);
    break;
    case 'nil':
    // the misfits
    break;

    case 'Object':
    case 'Array':
    // the complex
    break;

    default:
    // number, ndarray, typedArrays, ArrayBuffers, Buffers, all constructed from an ArrayBuffer 
    break;
  }


  //console.log(x+1, body.length, ab.length)
  //console.log(ab, body, body.length)
  return header.type 

}
