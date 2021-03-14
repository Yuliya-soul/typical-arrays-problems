
exports.min = function min (array) {
if((array.length===0)||(array===undefined)) {return 0} 
else{return Math.min.apply(null, array)}

 }

exports.max = function max (array) {
  return Math.max.apply(null, array)
}

exports.avg = function avg (array) {
  var sum = 0;
  for( var i = 0; i < array.length; i++ ){
      sum += parseInt( array[i], 10 ); 
  }
  
 return sum/array.length;
  
  
}
