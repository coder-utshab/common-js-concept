 // vip 
 //amra jodii akta function thaka ar akta function ka return koro  bahh
 // akta function ar vitor thaka ar akta function ka retutn kora thola tara akta nejosso closure toiry kora


 function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
 }

 const firstServer = kitchen();
 console.log(firstServer);