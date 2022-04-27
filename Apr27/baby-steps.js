const input = process.argv;
[node, path, ...data] = input;

let sum = 0;
for (x in data){
    sum+= Number(data[x]);
}
console.log(sum);
//my solution

// 'use strict'
    
//     let result = 0
    
//     for (let i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }
    
//     console.log(result)
// //official solution