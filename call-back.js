function greeting(greetingHandler, name){
    greetingHandler(name);
}

// const name = 'Utshab Kumar Ghosh';
//const products = 'laptop, mobaile, desktop';


function greetingHandler(name){
    console.log('Good morning',name);
}

function lunchgetHandler(name){
    console.log('from dubai',name);
}

function bookinOffice(name){
    console.log('I am from Bangladesh',name);
}

greeting(greetingHandler, 'Bangladesh')
greeting(greetingHandler, 'India')
greeting(greetingHandler, 'Aerica')
greeting(greetingHandler, 'Dubai')

greeting(lunchgetHandler, 'england')
greeting(lunchgetHandler, 'quater')
greeting(lunchgetHandler, 'malaysiya')

greeting(bookinOffice, 'Arjentina')




function submitHandler(){
    console.log('submit button handler')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)