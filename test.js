window.Buffer = Buffer
var ds = require('./index');
var cs = require('./construct');
var ndarray = require('ndarray')
var test = require('tape')
var str = 'for you my mooncalf, barmies, halfwits, and dodos';
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
var nest = {one: 1, two: {two: 'two', three: {three: fn}}}
var obj = {null: null, u: undefined, nan: NaN, inf: Infinity, ninf: -Infinity, str: str, n: n, fn: fn, ab: ab, f32: f32, nd: nd, arr: arr, nest: nest}
console.log(cs(ds(null)))
console.log(cs(ds(str)))
console.log(cs(ds(n)))
console.log(cs(ds(fn)))
console.log(cs(ds(ab)))
console.log(cs(ds(f32)))
console.log(cs(ds(nd)))
console.log(cs(ds(arr)))
console.log(cs(ds(obj)))

/*
test('string', function(t){
  t.plan(1)
  t.equals('ArrayBuffer', ds(str).data)
})
*/
