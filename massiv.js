// Array methods (Методы массивов)

const numbers = [1, 2, 3, 4, 5];

numbers.push(6);// добавляет элемент в конец массива
numbers.pop(); // удаляет из массива последний элемент
numbers.unshift(0); // добавляет элемент в начало массива
numbers.shift(); // удаляет из массива первый элемент

// consle,log(numbers. lenth); // 5

// 1. Из массива numbers вывести в консоль третий элемент (элемент с индексом 2)

// console.log(numbers[2]);

// 2. Дан массив чисел numbers. Вывести в консоль все числа массива

// for(let i=0;i<numbers.length;i++){
//   console.log(numbers[i])
// }

// numbers[0] = 1
// numbers[1] = 2
// numbers[2] = 3
// numbers[3] = 4
// numbers[4] = 5


// 3. Дан массив numbers с числами. Создать новый массив и добавить в него все числа из массива numbers, умноженные на 2 => [2, 4, 6, 8, 10]

const numbers2 = [];

for(let i = 0; i< number.length; i++){
  numbers2.push(numbers[i]*2)
}

// console.log(numbers2);


// 4. Напишите функцию, которая будет принимать в качестве аргумента массив чисел и возвращать новый массив со всеми числами переданного массива, умножеными на 2

const multNumber = arr=> {
  const new_arr = [];
  
  for(let i = 0; i < arr.length; i++){
    new_arr.push(arr[i]*2)
  }

  return new_arr
}

// console.log(multNumbers[1, 2, 3, 4, 5]); // [2, 4, 6, 8, 10]
// console.log(multNumbers([10, 43, 55])); // [20, 86, 110]
// console.log(multNumbers([32, 1, 15, 25])); // [64, 2, 30, 50]


// 5. Напишите функцию multNumbers2(), которая будет принимать два аргумента - массив чисел и число. Функция должна возвращать новый массив со всеми числами переданного массива, умножеными на переаднное число

const multNambers2 = (arr , num) =>{
  new_arr = [];
  for(let i = 0; i < arr,length; i++){
    new_arr.push(arr[i]* num)

  }
  return new_arr
}

// console.log(multNumbers2([1, 2, 3, 4, 5], 3)); // [3, 6, 9, 12, 15]
// console.log(multNumbers2([10, 43, 55], 0)); // [0, 0, 0]
// console.log(multNumbers2([32, 1, 15, 25], 2)); // [64, 2, 30, 50]


// 6. Напишите функцию getEvenNums(), которая принимает массив с числами и возвращает новый массив с четными числами из переданного массива

const getEvenNums = arr => {
  const new_arr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr % 2===0){
      new_arr.push(arr[i])
    }
  }

  return new_arr 
}

// console.log(getEvenNums([1, 64, 34, 5, 18])); // [64, 34, 18]
// console.log(getEvenNums([70, 52, 3, 7])); // [70, 52]



// 7. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длинее 5 символов

const getLongestString = arr =>{
  new_arr=[];
  for(let i = 0;i< arr.lenght; i++){
    if(arr[i].lenght > 5){
      new_arr.push(arr[i])
    }
  }
  return new_arr
}

// console.log(getLongStrng(['hi', 'good morning', 'by])); // ['good morning']
// console.log(getLongStrings(['Anna', 'Irina', 'Natalia', 'Ivan', 'Stepan'])); // ['Natalia', 'Stepan']


// 8. Напишите функцию, которая принимает массив со строками и возвращает новый массив. Если строка длиннее 5 символов, то в новый массив добавляется строка 'longer than 5', а если 5 и короче - то 'shorter than 5'

const getNewStrings = arr =>{
  const new_arr=[];//1 variant
  for(let i = 0; i < arr.lenght; i++){
    if(arr[i].lenght>5){
      new_arr.push('longer than 5')
    }else{
      new_arr.push('shotter than 5')
    }
  }
}
 //variant 2
 for(let i = 0; i < arr.lenght; i++){
  arr[i].lenght > 5?new_arr.push('longer than 5'): new_arr.push('shotter than 5') //uslovnii operator
 }

  // Вариант 3
  for(let i = 0; i < arr.length; i++){
    new_arr.push(arr[i].length > 5 ? 'longer than 5' : 'shorter than 5') 
  }

 







// console.log(getNewStrings(['hi', 'good morning', 'bye'])); // ['shorter than 5', 'longer than 5', 'shorter than 5']
// console.log(getNewStrings(['Anna', 'Irina', 'Natalia', 'Ivan', 'Stepan'])); // ['shorter than 5', 'shorter than 5', 'longer than 5', 'shorter than 5', 'longer than 5']


// 9. Напишите функцию getNumbersFromArray(), которая принимает массив с разными типами данных и возвращает новый массив только с числами
// typeof- Оператор typeof возвращает строку, указывающую тип операнда.
//primer- function printNumber(number) {
//	if (typeof number === 'number') {
//		console.log(number);
//	}
//}

//printNumber(2);
//printNumber('str');

//printNumber(3);

const getNumbersFromArray = arr =>{
  new_arr=[];
  for(let i = 0; i < arr.lenght; i++){
    if (typeof(arr[i])=== 'number'){
      new_arr.push(arr[i])
    }
  }
  return new_arr
}

// console.log(getNumbersFromArray(['1', 'helo',true, 1, 87, 'bye'])); // [1, 6, 87]



// 10. Написать функцию changeStrings(), которая принимает массив с разными типами данных и возвращает новый массив, где все строки будут заменены на строку 'XXXXX'

const changeStrings = arr =>{
  new_arr = [];
  for( let i = 0; i < arr.lenght; i++){
    new_arr(typeof arr[i]==='string'?'XXXXX': arr[i])
  }
  return new_arr
}


// console.log(changeStrings([1, 'helo',true, 1, 87, 'bye'])); // [1, 'XXXXX', true, 6, 87, 'XXXXX']



// ДЗ
// 1. Создайте пустой массив numbers. Добавьте в него числа от 1 до 5 с использованием цикла и метода push.
let number2 = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log(number2);
// 2. Создайте массив evenNumbers и с использованием цикла метода push добавьте в него все четные числа от 2 до 10.
let evenNumbers = [];
for (let i = 2; i <= 10; i += 2) {
  evenNumbers.push(i);
}
console.log(evenNumbers);
// 3. Создайте пустой массив squares. Заполните его квадратами чисел от 1 до 5 с использованием метода push.
let squares = [];
for (let i = 1; i <= 5; i++) {
  squares.push(i * i);
}
console.log(squares);
// 4. Создайте массив randomNumbers и добавьте в него 10 случайных чисел от 1 до 100 с использованием цикла и метода push.
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  randomNumbers.push(randomNumber);
}
console.log(randomNumbers);
// 5. Создайте массив positiveNumbers и добавьте в него только положительные числа из массива numbers = [1, -2, 3, -4, 5, -6] с использованием цикла и метода push. 
let number1 = [1, -2, 3, -4, 5, -6];
let positiveNumbers = [];

for (let i = 0; i < number1.length; i++) {
  if (number1[i] *2) {
    positiveNumbers.push(numbers[i]);
  }
}
console.log(positiveNumbers);

// 6. Создайте пустой массив doubledNumbers. Используя цикл, умножьте каждый элемент из массива numbers на 2 и добавьте результаты в doubledNumbers с использованием метода push.
let positivNumbers = [1, -2, 3, -4, 5, -6];
let number = [];

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    positiveNumbers.push(numbers[i]);
  }
}
console.log(positiveNumbers);
// *7. Создайте пустой массив vowels. Используя цикл, найдите и добавьте все гласные буквы из строки "Hello, World!" в массив с использованием метода push. Вам также понадобится использовать метод includes().
const greeting = "Hello, WOrld!";
const vowels = [];

for(let i = 0; i < greeting.length; i++){
  // const letter = greeting[i].toLowerCase();
  const vow_letter = ['a', 'o', 'i', 'y', 'u', 'e', 'A', 'O', 'I', 'U', 'Y', 'E'];

  if(vow_letter.includes(greeting[i])){
    vowels.push(greeting[i])
  }
}

// console.log(vowels);

