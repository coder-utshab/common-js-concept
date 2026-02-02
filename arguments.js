//function sum(a, b, c){   parameters
// console.log(arguments [4]);
function sum(a, b, c){
    const args = [...arguments];
    // console.log(args);
    const result = a+ b + c;
    return result;
}
//const total = sum(45, 64, 26);  arguments
const total = sum(45, 64, 26);
// console.log(total);
console.log(sum.length);