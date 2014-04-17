window.Buffer = Buffer
var ds = require('./index');
var cs = require('./construct');
var ndarray = require('ndarray')
var test = require('tape')
var str = 'for you my mooncalf';
var n = 1/9
var fn = function name(foo,balls){ 
  return function(biz,baap){
    return foo + balls + biz + baap
  }
}
var reg = new RegExp('[a-z]')
var buffa = new Buffer('a herald buffers our way')
var ab = new ArrayBuffer(16)
var f32 = new Float64Array(1)
f32[0] = 1/2
var nd = new ndarray(new Float32Array(4), [2,2])
var arr = [null, undefined, NaN, Infinity, -Infinity, str, n, ab, f32, fn, nd]
var nest = {one: 1, two: {two: 'two', three: {three: fn}}}
var obj = {null: null, u: undefined, nan: NaN, inf: Infinity, ninf: -Infinity, str: str, n: n, fn: fn, ab: ab, f32: f32, nd: nd, arr: arr, nest: nest}
console.log(cs(ds(null)))
console.log(cs(ds(undefined)))
console.log(cs(ds(Infinity)))
console.log(cs(ds(str)))
console.log(cs(ds(n)))
console.log(cs(ds(fn)))
console.log(cs(ds(reg)))
console.log(cs(ds(ab)))
console.log(cs(ds(f32)))
console.log(cs(ds(buffa)))
console.log(cs(ds(nd)))
console.log(cs(ds(arr)))
console.log(cs(ds(obj)))
fn = cs(ds(obj))[7]
console.log(fn(2,3)(4,5))
/*
test('string', function(t){
  t.plan(1)
  t.equals('ArrayBuffer', ds(str).data)
})
*/
