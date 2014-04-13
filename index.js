// metadata is base64 encoded JSON with a semi-colon terminator?
// sure
// window.Buffer = Buffer

module.exports = deconstruct

function deconstruct(val){

  var res = Object.create(null)
  res.meta = Object.create(null)
  res.meta.type = new String()
  
  var reg = new RegExp('[0-9]+(?=darray)')
  var reg = new RegExp('[0-9]+(?=d)')
  var nodeFlag = false
  var r

  try{
    res.meta.type = val.constructor.name
    if(res.meta.type == 'Object' || res.name == 'Array'){
      for(var y in val){
        res.data = deconstruct(val[y])
      }
    }
    else if(res.meta.type == 'Number'){
      if(false){ // infinity or -infinity
        
      }
      var data = new Float64Array(1)
      data[0] = val
      res.data = data.buffer
    }
    else if(res.meta.type == 'String'){
      res.data = new Buffer(val).buffer
    }
    else if(r = reg.exec(res.meta.type)){
      // ndarray!
      console.log(val.data.buffer, r)
      res.meta.dimensions = Number(r[0])
      res.meta.shape = val.shape.join()
      res.meta.ndarrayType = val.data.constructor.name
      res.meta.type = 'ndarray'
      res.data = val.data.buffer
    }
    else if(res.meta.type == 'Function'){
      var str = val.toString();
      res.meta.name = val.name
      var regArgs = /\(([^)]+)\)/;
      res.meta.arguments = regArgs.exec(str)[1]
      var i = str.indexOf('{')
      var ii = str.lastIndexOf('}')
      res.data = str.slice(i+1, ii)
    }
    else if(res.meta.type == 'Buffer'){
      nodeFlag = true
      res.meta.nodeFlag = true
      res.data = val
    }
    else if(Buffer.isBuffer(val)){
      res.meta.type = 'Buffer'
      res.meta.nodeFlag = false
      res.data = deconstruct(val.buffer).data
    }
    else{
      // must me a TypedArray of ArrayBuffer
      if(val.buffer){
        // TypedArray
        res.data = val.buffer
      }
      else{
        res.data = val
      }
    }
  }catch(err){
    // undefined or null or isNaN
    console.log(err, val)
    res.meta.name = String(val)
    res.data = null
  }
  if(process.title == 'node' && !res.meta.nodeFlag){
    if(!res.meta.nodeFlag) res.data = new Buffer(new Int8Array(res.data))
  } 
  return res

}
