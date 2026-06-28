// print 10 numbers from 0 to 10
// for(let i = 0; i < 11; i++){
//     console.log(i);
// }

// //print even numbers from 0 to 20
// for(let i = 0; i < 21; i++){
//     if(i % 2 === 0){
//     console.log(i);
//     }
// }


//Find the sum of numbers from 1 to 100.

//  var sum = 0;
// for(let i = 0; i <=100 ; i++){
//     sum += i;
  
// }
//   console.log(sum);

// Print the multiplication table of 7.
// for(let i = 1; i <= 10; i++){
//    console.log(`7 * ${i} = ${7 * i}`);
// }

//Count how many numbers between 1 and 100 are divisible by 3.
var count = 0;
for(let i = 1; i <= 100 ; i++){
    if(i % 3 === 0){
        count++;
    }
}
  console.log(count);

  for(let i = 1; i <= 5 ; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += "*";
;    }
    console.log(row);
  }