// Переменнные

// const
// let
// var

// const name = "Nursat";

// console.log(name);

// let name = "Nursat";

// name = "Bakyt";

// console.log(name)

// var name2 = "Nursat";

// name2 = "Bakyt";

// console.log(name2)

// function name(){
//   let nameN = "Nursat";
//   return nameN
// }

// console.log(name())

// Типы данные

// string

// const name = "Nursat";

// const string = `My name is ${name}`

// console.log(string);

// number

// const number = 545.5;

// console.log(number);

// boolean 

// const boolean = false;

// console.log(boolean);

// undefined null

// let name;

// console.log(name)

// const name = prompt("What is your name?")

// alert(`Welcome, ${name}`)

// console.log(name);

// + - * / % 

// console.log(10+5)
// console.log(20-15)
// console.log(100*5)
// console.log(20/5)
// console.log(5%3)

// console.log(Math.sqrt(16));
// console.log(Math.pow(5,4));
// console.log(Math.max(4,6,25,6,7,2,6,7))
// console.log(Math.min(34,2,1,312,5,6,7,76))
// console.log(Math.round(Math.random()*100))
// console.log(Math.ceil(Math.random()*100))
// console.log(Math.floor(Math.random()*100))

//const name = "Nur sultan Nasda dasdnaskjdan dadnajsk";

//console.log(name[0])
// console.log(name.length);
//console.log(name[name.length-1]);
//console.log(name.toLowerCase())
// console.log(name.substring(3))
// console.log(name.split(" "))

// >
// < 
// >=
// =<
// ==
// !=

//console.log(7 != "7")

// if else if else

// const name = "Nursat";

// if (name === "Nur-Sultan"){
//   alert("True");
// }else if (name === "Nursat"){
//   alert("Yes")
// }else{
//   alert("False");
// }

// const score = +prompt("What is your score in exam?")

// // 90 100 => Your score is A
// // 80 90 => Your score is B 
// // 70 80 => Your score is C
// // 60 70 => Your score is D
// // < 60 => Fail

// if (score <= 100 && score >= 90){
//   alert("A");
// }else if (score >= 80 && score < 90){
//   alert("B")
// }else if (score >= 70 && score < 80){
//   alert("C")
// }else if (score >= 60 && score < 70){
//   alert("D")
// }else{
//   alert("Fail")
// }

// 1 prompt => число
// 2 prompt => число
// 3 prompt => + - * /

// const number1 = +prompt("Number 1:")
// const number2 = +prompt("Number 2:")
// const operator = prompt("Operator")

// if (operator === "+"){
//   alert(number1+number2)
// }else if (operator === "-"){
//   alert(number1-number2)
// }else if (operator==="*"){
//   alert(number1*number2)
// }else{
//   alert(number1/number2)
// }

//Even
//Odd

// const number = +prompt('Number');

// if (number % 2 === 0){
//   alert("Even")
// }else{
//   alert("Odd")
// }

// const number1 = +prompt("number 1:")
// const number2 = +prompt("number 2:")

// if (number1 > number2){
//   alert(">")
// }else if (number1 < number2){
//   alert("<")
// }else if (number2 === number1){
//   alert("=")
// }

// const number1 = +prompt("number 1");
// const number2 = +prompt("number 2");
// const number3 = +prompt("number 3");

// const all = number1 * number2;

// if (all >= number3){
//   alert("yes")
// }else{
//   alert("no")
// }

// const number1 = +prompt("number 1");
// const number2 = +prompt("number 2");
// const number3 = +prompt("number 3");

// alert(Math.max(number1, number2, number3) - Math.min(number1, number2 , number3))


// const number1 = +prompt("number 1");
// const number2 = +prompt("number 2");
// const number3 = +prompt("number 3");

// if (number1 + number2 < number3){
//   alert("Impossible")
// }else{
//   alert(number1+number2-number3)
// }

// const number1 = +prompt("number1");

// if (number1 % 2 === 0){
//   alert(number/2)
// }else if (number % 2 === 1){
//   alert(number)
// }else{
//   alert(0)
// }

// const a = +prompt("Enter a:")
// const b = +prompt("Enter b:")
// const c = +prompt("Enter c:");

// const descr = Math.sqrt(Math.pow(b,2) - 4 * a * c);

// if (descr > 0){
//   const answer1 = (-b + descr) / (2*a);
//   const answer2 = (-b - descr) / (2*a);
//   alert("Your answers " + answer1 + " and " + answer2)
// }else if (descr === 0){
//   const answer2 = (-b - descr) / (2*a);
//   alert("Your answers " + answer1 + " and " + answer2)
// }else{
//   alert("No answers");
// }

// const number = +prompt("Number:")

// // x + x + 4x = S
// // 6x = S 
// // x = s / 6

// const x = number / 6;
// alert(x + " " + x + " " + 4*x)

// const number1 = +prompt('weight 1:')
// const number2 = +prompt('weight 2:')
// const number3 = +prompt('weight 3:')

// if (number1 < 94 || number1 > 727 || number2 < 94 || number2 > 727 || number3 < 94 || number3 > 727){
//   alert("Error")
// }else{
//   alert(Math.max(number1, number2, number3));
// }


// Циклы

// For

// for (let i = 0; i <= 500; i++){
//   console.log(i)
// }

// for (let i = 1; i <= 100; i++){
//   if (i % 5 === 0){
//     continue;
//   }else{
//     console.log(i);
//   }
// }

// let i = 0;

// while (i < 100){
//   console.log(i)
//   i++;
// }

//  < 10 => word
//  > 10 => intellegence => i10e



// if (word.length < 10){
//   alert(word)
// }else{
//   alert(word[0] + "" + String(word.length-2) + "" +x)
// }

// const word = prompt('Word:');

// const firstLetter = word.charAt(0);
// const lastLetter = word.charAt(word.length-1);

// let count = 0;

// if (word.length < 10){
//   alert(word);
// }else{
//   for (let i = 1; i < word.length - 1; i++){
//     count++;
//   }
//   alert(firstLetter + "" + count + "" + lastLetter)
// }

// const coins = +prompt("Coins:")

// let count = 0;

// for (let i = 0; i < coins; i++){
//   const coin = +prompt("Coin:");
//   if (coin === 0){
//     count++;
//   }
// }

// alert(count)

//0 - 1000

// 5 => divided 5
// 3 => divided 3
// 3,5 => divided 5 and 3

// for (let i = 1; i <= 1000; i++){
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log("divided by 5 and 3")
//   }else if (i % 3 === 0){
//     console.log("divided by 3")
//   }else if (i % 5 === 0){
//     console.log("divided by 5")

//   }else{
//     console.log(i)
//   }
// }

// AANANANAN

// const chess = prompt("Sets");

// let countN = 0;
// let countA = 0;

// for (let i = 0; i < chess.length; i++){
//   if (chess.charAt(i) === 'N'){
//     countN++;
//   }else{
//     countA++;
//   }
// }

// if (countA > countN){
//   alert("Winner is Anton");
// }else if (countA < countN){
//   alert("Winner is Nursultan");
// }else{
//   alert("Draw")
// }

// let check = false

// let answer = +prompt("9 + 5 = ");

// while (check === false){
//   if (answer === 14){
//     check = true;
//     alert("True Answer!")
//   }else{
//     answer = +prompt("Try again!")
//   }
// }

// let random = Math.round(Math.random()*100)

// let check = false;

// while (!check){
//   const answer = +prompt('Enter your guess: ')
//   if (answer > random){
//     alert("Your guess is too high")
//   }else if (answer < random){
//     alert("Your guess is too low")
//   }else{
//     alert("Yes, the number is " + random)
//     check=true;
//   }
// }


// let check = false;
// let counter = 0;

// while (!check){
//   const number = +prompt("Number:")
//   if (number === 0){
//     check = true;
//     alert(counter)
//   }else{
//     counter = counter + number;
//   }
// }

// let positiveCounter = 0;
// let negativeCounter = 0;
// let total = 0;
// let check = false;

// while (!check){
//   const number = +prompt("Number:")
//   total += number;
//   if (number === 0){
//     check = true;
//   }else{
//     if (number > 0){
//       positiveCounter++;
//     }else{
//       negativeCounter++;
//     }
//   }
// }

// console.log("The number of positive numbers is " + positiveCounter);
// console.log("The number of negative numbers is " + negativeCounter);
// console.log("The total is " + total);
// console.log("Average:  ", total / (positiveCounter+negativeCounter))

// for (let i = 100; i <= 1000; i++){
//   if  (i % 5 === 0 && i % 6 === 0){
//     console.log(i);
//   }
// }

// for (let i = 100; i <= 200; i++){
//   if (i % 5 === 0 && i % 6 !== 0 || i % 5 !== 0 && i % 6 === 0 ){
//     console.log(i);
//   }
// }

// const name = "aslkmdalkdms";

// switch (name){
//   case "Bekarys": 
//     console.log("Beka");
//     break;
//   case "Sabina":
//     console.log("Sabi");
//     break;
//   case "Nursultan": 
//     console.log("Nursik");
//     break;
//   default:
//     console.log("noname");
// }

// let check = false;
// let max = -100000000;

// while (!check){
//   const number = +prompt("Number:")
//   if (number === 0){
//     check = true
//   }else{
//     if (number > max && number !== 0){
//       max = number;
//     }
//   }
// }

// console.log(max);

// checkCinema(21);
// checkCinema(17);

// function checkCinema(age){
//   if (age >= 18){
//     console.log("Yes")
//   }else{
//     console.log("No")
//   }
// }

//10,20 => 10+11+12+13+14+15+16+17+18+19+20

// function sum(number1, number2){
//   let count = 0;
//   for (let i = number1; i <= number2; i++){
//     count += i;
//   }
//   return count;
// }

// console.log(sum(10,20))
// console.log(sum(20,30))


// 45 75 => 15

// function maxDivided(number1, number2){
//   if (number1 <number2){
//   for (let i = number1; i >= 0; i--){
//     if (number1 % i === 0 && number2 % i === 0){
//       return i;
//     }
//   }
//   }else{
//     for (let i = number2; i >= 0; i--){
//       if (number1 % i === 0 && number2 % i === 0){
//         return i;
//       }
//     }
//   }
// }

// console.log(maxDivided(96,333));

// function sumDigits(number){
//   let count = 0;
//   const numberString = String(number);
//   for (let i = 0; i < numberString.length; i++){
//     count += Number(numberString[i])
//   }
//   return count;
// }

// console.log(sumDigits(987))

//90 - 100 => A
//80-90 => B
// 70-80 => C
//60 - 70 => D
// Fail 


// const grade = (score) => {
//   if (score > 90 && score <= 100){
//     return "Mark: A";
//   }else if (score > 80 && score <= 90){
//     return "Mark: B"
//   }else if (score > 70 && score <= 80){
//     return "Mark: C"
//   }else if (score > 60 && score <= 70){
//     return "Mark: D"
//   }else{
//     return "Fail"
//   }
// }

// console.log(grade(75))

// function reverse(str){
//   let newStr = "";

//   for (let i = str.length-1; i >= 0; i--){
//     newStr += str[i]
//   }
//   if (str === newStr){
//     return "Yes"
//   }else{
//     return "No"
//   }
// }

// console.log(reverse("mada"))

// function countVowel(word){
//   let count = 0;
//   for (let i = 0; i < word.length; i++){
//     if (word[i] === "a" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y"){
//       count++;
//     }
//   }
//   console.log(count)
// }

// countVowel("aiyou")

// function letterCount(word, letter){
//   let count = 0;
//   for (let i = 0;i < word.length; i++){
//     if (word[i] === letter){
//       count++;
//     }
//   }
//   console.log(count);
// }

// letterCount("first letter", "e")

// Arrays

// const city = new Array("Almaty", "Astana", "Pavlodar")

// console.log(city)


// console.log(sports)

// console.log(sports.length)

// console.log(sports[0])


// console.log("Before: ", sports)
// sports.push("Tennis");
// sports.unshift("Hockey");
// console.log("After: ", sports)
// console.log(sports.indexOf("Volleyball"));
// sports.fill("Golf", 2, 3)
// console.log(sports)

//const sports = ["Football", "Basketball", "Volleyball", "Hockey", "Tennis"]

// sports.map((item, index) => {
//   console.log(index+1 + " : " + item)
// })

// const filtered = sports.filter(sport => {
//   return sport.length < 7
// })

// console.log(filtered)

// const total = sports.reduce((count, sports) => {
//   return sports.length + count
// }, 0)

// sports.forEach(sport => {
//   console.log(sport)
// })

// const someCheck = sports.every(sport => {
//   return sport.length >= 6 
// })

// console.log(someCheck);

// const items = +prompt("Enter the number of items:");
// const numbers = [];

// for (let i = 0; i < items; i++){
//   const number = +prompt("Enter the number:")
//   numbers.push(number);
// }

// let total = 0;

// numbers.map(number => {
//   total += number;
// })

// let average = total / numbers.length;

// let countMoreAverage = 0;

// numbers.map((number) => {
//   if (number > average){
//     countMoreAverage++;
//   }
// })

// console.log("Average is " + average);
// console.log("Number of elements above the average is " + countMoreAverage)

// const numbers = [3,4,6,4,2343,2,5,62];

// console.log(numbers.includes(61))

// const sorted = numbers.sort((a,b) => a-b);

// console.log(sorted)

// console.log(sorted[0])

// const number = [1,2,3,2,1,6,3,4,5,2]
// const number2 = [];

// number.map(football => {
//   if (!number2.includes(football)){
//     number2.push(football)
//   }
// })
// console.log(number2)

// concat

const array1  = [1,2,3];
const array2  = [4,5,6];

const array3 = array1.concat(array2);
const array6 = array1.concat(array2);

// splice

// 1 2 3 4 5 6

// console.log(array3.slice(0,3));
// console.log(array6.slice(3,3));

const numberOfStudents = +prompt("Enter the number of students:")
const scores = [];

for (let i = 0; i < numberOfStudents; i++){
  const score = +prompt("Enter score:")
  scores.push(score);
}

const sortedArray = scores.sort((a,b) => a-b)
const max = sortedArray[scores.length-1]

scores.map((score,index) => {
  const s = max - score;
  let mark = "";
  if (s <= 10){
    mark = "A"
  }else if (s <= 20){
    mark = "B"
  }else if (s <= 30){
    mark = "C"
  }else if (s <= 40){
    mark = "D"
  }else{
    mark = "F"
  }
  console.log("Student " + index + " score is " + score + " and grade is " + mark)

})




