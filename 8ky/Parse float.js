function parseF(s) {
  if(s == parseFloat(s)){
    return Number.parseFloat(s)
    }else{
      return null
    }
  }

 2 Variant
 function parseF(s){
   return isNaN(parseFloat(s)) ? null : parseFloat(s);
 }
 3 Variant
 let parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s)