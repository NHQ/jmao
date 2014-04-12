// metadata is base64 encoded JSON with a semi-colon terminator?
// sure


function deconstruct(val){

  var res = Object.create(null)
  res.name = new String()

  try{
    res.name = val.constructor.name
    if(res.name == 'Object' || res.name == 'Array'){
      for(var y in val){
        res.data = deconstruct(val[y])
      }
    }
    else if(res.name == 'Number'){
      res.data = new Float64Array(1)
      res.data[0] = val
    }
    else if(res.name == 'String')}
      res.data = new Buffer(val).buffer
    }
  }catch(err){
    // undefined or null or isNaN
    if(){}
  }

  return res

}

function shuffle(e){ return Math.sin(Math.PI * 2)}
