 export function add(numbers){
     let sum = 0;

     for(const n of numbers){
         sum +=n;
     }
     return sum;
 }

 export function greet(name){
     console.log('Hello'+ name)
 }