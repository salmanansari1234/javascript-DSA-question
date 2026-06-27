// let marks =[97, 82, 75, 64, 36];

// console.log(marks)
// console.log(marks[0]= 66)

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"]

// for(let idx = 0; idx < heroes.length; idx++){
//     console.log(heroes[idx])
// }

// let arr = ["salman", "arshad", "inush", "tabrez"]

// for(let idx = 0; idx < arr.length; idx++){
//     console.log(arr[idx])
// }

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length
// console.log(avg)

// let items = [250, 645, 300, 900, 50];

// let i = 0;

// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);

//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++
// }

// for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer
// }

// console.log(items)

// let items = [800, 1000, 400, 500, 1500]

// for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 30;
//     items[i] -= offer
// }
// console.log(items)

// let foodItems = ["ptato", "apple", "mango", "date"]

// foodItems.push("chips", "burger","pizza", "sandwitch")

// console.log(foodItems)

// let foodItems = ["ptato", "apple", "mango", "date"]
// console.log(foodItems)
// foodItems.pop()

// console.log(foodItems)

// console.log(foodItems);
// console.log(foodItems.toString())


// let marvelHeroes = ["thor", "spiderman", "ironman"]
// let decHroes = ["superman","batman", "mogali"]

// let heroes = marvelHeroes.concat(decHroes);
// console.log(heroes)

// unshift
// let marvelHeroes = ["thor", "spiderman", "ironman"] 

// marvelHeroes.unshift("antman")

// console.log(marvelHeroes)

// shift

// let marvelHeroes = ["thor", "spiderman", "ironman"] 

// let val = marvelHeroes.shift();
// console.log("deleted", val)

// slice
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.stranger"] 

// console.log(marvelHeroes)

// console.log(marvelHeroes.slice(1,3))

// splice

// let arr = [1, 2, 3, 4, 5,  6, 7, 8, 9]

// arr.splice(2, 2, 101, 102)

// console.log(arr)

// let companies = ["Bloomber","Microsoft", "google", "IBM", "Netflix"];

// companies.shift()
// console.log(companies)

// companies.splice(2, 1, "ola")

// console.log(companies)

// companies.push("Amazon")
// console.log(companies)

// Q.1

// let n = 10;
// for(let i=1; 1<n; i++){
//     console.log(i)
// }

// Q.2

// function sum(arr){
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }

// console.log(sum([1, 2, 3, 4, 5]))



// array methode

// let arr = [10, 20, 30, 40];

// console.log(arr[2])

// find maximum values

// input = [3,7,2,9,1]
//output = 9

// let arr = [3, 7, 2, 9, 1];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if (arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log("maximum value is:", max);

// find minimum values

// let arr = [3, 7, 2, 9, 1];

// let min = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if (arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log("minimum value is:", min);

// let arr = [10, 9, 15, 20, 25];

// let max = arr[0];

// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max)

// input: 45678
// ouput: 5

// let num = 45678;
// let count = 0;

// while(num > 0){
//     num = Math.floor(num / 10);
//     count++

// }
// console.log(count)

// Reverse an number
// input: 12345
// output: 54321

// let num = 12345;
// let rev = 0;

// while(num > 0){
//     let lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }

// console.log(rev)



// find Missing number in Array
// input : [1, 2, 3, 5] n = 5
// output : 4

// function findMissing(arr, n){
//     let total = (n * (n+1))/2;
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return total - sum;
// }

// console.log(findMissing([1, 2, 3, 5],5));

//Q.2, find missing number in array

// let arr  = [1, 2, 3, 4, 5, 7,8] n = 8;
// output : 6;

// function findMissing(arr, n){
//     let total = (n*(n + 1))/2;
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return total - sum;
// }

// console.log(findMissing([1, 2, 3, 4, 5, 7, 8], 8));

// Reverse an array without using reverse().
// Interviewer: "Write a function that reverses
//  an array without using 
// the built-in reverse() method.
//  Consider both in-place and out-of-place
//  solutions."


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let left = 0;
let right = arr.length - 1;

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}

console.log(arr);

// what is palindrome number

let num = 121;
let original = num;
let reverse = 0;

while (num > 0){
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
}

if (original === reverse) {
    console.log("The number is a palindrome.");
} else {
    console.log("The number is not a palindrome.");
}

// GCD

let a = 12;
let b = 18;

while (b !== 0){
    let remainder = a % b;
    a = b;
    b = remainder;
}
console.log("GCD is:", a);


