var ds = require('./index');
var ndarray = require('ndarray')
var str = 'for you my mooncalf';
var n = 1e9
var fn = function name(foo,balls){ 
  return function(biz,baap){
    return foo + balls + biz + baap
  }
}
var ab = new ArrayBuffer(16)
var f32 = new Float32Array(4)
f32[2] = 1/2
var nd = new ndarray(new Float32Array(4), [2,2])
var arr = [null, undefined, NaN, Infinity, -Infinity, str, n, ab, f32, fn, nd]
var obj = {null: null, u: undefined, nan: NaN, inf: Infinity, ninf: -Infinity, str: str, n: n, fn: fn, ab: ab, f32: f32, nd: nd, arr: arr}



