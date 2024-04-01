function Chisla(start, end){
  let current = start;

   let timerId = setInterval(function(){
     console.log(current);
     if (current == end){
       clearInterval(timerId);
     }
     current++;
   },1000);
}


Chisla(1, 6);