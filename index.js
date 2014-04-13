// metadata is base64 encoded JSON with a semi-colon terminator?
// sure
window.Buffer = Buffer

module.exports = deconstruct

function deconstruct(val){

  var res = Object.create(null)
  res.meta = Object.create(null)
  res.meta.type = new String()
  
  var reg = new RegExp('[0-9]+(?=darray)')
  var r;

  try{
    res.meta.tpye = val.constructor.name
    if(res.meta.type == 'Object' || res.name == 'Array'){
      for(var y in val){
        res.data = deconstruct(val[y])
      }
    }
    else if(res.meta.type == 'Number'){
      var data = new Float64Array(1)
      data[0] = val
      res.data = data.buffer
    }
    else if(res.meta.type == 'String'){
      res.data = new Buffer(val).buffer
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
    else if(r = reg.exec(res.meta.type)){
      // ndarray!
      res.meta.dimensions = Number(r[0])
      res.meta.shape = val.shape.join()
      var data = deconstruct(val.data)
      res.meta.ndarrayType = data.name
      res.data = data.data
    }
    else if(Buffer.isBuffer(val)){
      res.meta.type = 'Buffer'
      res.data = deconstruct(val.buffer).data
    }
    else{
      // must me a TypedArray of ArrayBuffer
      if()
    }
  }catch(err){
    // undefined or null or isNaN
    res.meta.name = String(val)
    res.data = null
  }

  return res

}

function shuffle(e){ return Math.sin(Math.PI * 2)}
