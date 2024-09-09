
let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9,10];
console.log(numbers)

// 1
let assending = numbers.sort((a,b) => {return a-b})
 console.log(assending)

 // 2 *

 let square = [];
for (let i = 0; i < numbers.length; i++) {
    square.push(numbers[i] * numbers[i]);
  }
 console.log(square)

//  ------------
// **********

// 3
console.log(numbers.find((number) => number > 25))
// 4
console.log(numbers.map((number) => number> 5))
// 5
console.log(numbers.includes(3))
// 6
console.log(numbers.filter(number => number%2 ==0))
// 7
let index1 = 4, indexnum = 2;
console.log(numbers.splice(index1, indexnum))
console.log(numbers)
// 8
let multiplication =1;
for(let i =0; i< numbers.length; i++){
multiplication *= numbers[i]
}
console.log("multiplication : ", multiplication)
// 9
for(let i =0; i <numbers.length; i++){
    if(numbers[i] > 5){
        console.log(i)
        break;
    }
}
// 10
console.log(numbers.pop())
console.log(numbers)
// 11
numbers.push(100)
console.log(numbers)


// -----------------------

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// 1
let nameA = names.filter(item => 
    item.includes("a") || item.includes('A')
)
console.log(nameA)
// 2
let nameString = names.join(" - ")
console.log(nameString)

// -----------------------

let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];
// 1 *

console.log(fruits.map(item => item.match(/(\bb\S+\b)/)))
// 2
let fruits2 = fruits.splice(4);
console.log(fruits2)

// -----------------------

let words = ['hello', 'world', 'javascript', 'array', 'function'];
// 1
for(let i =0; i< words.length; i++){
    console.log(`lenght of ${words[i]}`,words[i].length)
}
// 2
for(let i =0;i< words.length;i++){
if(words[i] == "javascript"){
    console.log(words[i])
    break;
}else 
console.log("javascript is not found")
}

