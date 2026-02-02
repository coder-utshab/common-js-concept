/*
// WAYS TO GET UNDEFINE

1. variable that is not initialited will give undefinde

2. function with no return

3.parameter that is not passed will be undefined

4. if return has nothing on the right side will return undefined

5. property that does,not exists on an object will give you undefind

6. accesing array elements outside of the index range

7. deleting an elent inside an array

8. set a value directly to undefind
*/

let first;

function secoend(a, b){
    const total =  a + b;
}



const result = secoend();

function third(a, b,  c, d){
    const total = a+b+c+d;
    console.log(a, b, c, d);
}



// third(2, 5);

//console.log(result);

function noNegative(a, b){
    if(a < 0 || b< 0){
        return
    }
   return a + b;
}


 const total = noNegative(2,-5);
//  console.log(total);
   const fifth = {id: 2, name: 'sajib', age:25} 
   console.log(fifth.age, fifth.salary);




const sixes = [4, 9, 25, 32, 45, 56];
//you should not do it. instead use splice
delete sixes[1];
//  console.log(sixes[1], sixes[4], sixes[200]);
//  console.log(sixes);

const eight = undefined;

const ninth = null;

const data = {results: [], updated: null}

// console.log(typeof undefined)
console.log(typeof null);