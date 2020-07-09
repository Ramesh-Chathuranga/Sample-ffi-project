var ffi = require("@saleae/ffi");

var libm = ffi.Library("./FDLL", {
    getData: ["string", []],
    getData1: ["string", ["string"]]
});

//todo if some one wants to use dll it should be export when building dll

// try{
//     var libm1 = ffi.Library("./cw/comdemo", {
//         getDrugsJSON: ["String", []],
//     });
//     console.log(libm1.getDrugsJSON())
// }catch(error){
//     console.log(error)
// }

console.log(libm.getData1(" Ramesh")," data is : ",libm.getData());