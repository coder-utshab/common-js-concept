/*
 Truthy:
 1. true
 2. any number (+ve, -ve) will be truthy other than 0
 3. any string other than empty string
4. '0' is



 Falshy:
 1. false
 2. 0
 3. '' (empty string)
 4. undefined
5. null
*/


const x = -4;
if(x){
    console.log('Value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


//option task
//check falsy

const y= null;
if (!y){
    console.log('value is falsy')
}
const z = {class: 9};
//check true
if(!!x){
    console.log('value is truthly');
}
    