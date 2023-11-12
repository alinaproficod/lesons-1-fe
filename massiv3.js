// Array methods

// .forEach(el => {}) - выполняет переданную функцию для каждого элемента массива, ничего не возращает
// .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву

// .filter(el => {}) - возвращает новый массив, в который попадут только те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию

// .find(el => {})

// .reduce()
// .sort()



// 1. Напишите функцию getEvenNums(), которая принимает массив с числами и возвращает новый массив с четными числами из переданного массива

const getEvenNums = arr => {
    const new_arr = [];
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
        new_arr.push(arr[i])
      }
    }
  
    return new_arr 
  }
  
  
  const getEvenNums1 = arr => {
    const new_arr = [];
  
    // arr.forEach(el => {
    //   if(el % 2 === 0){
    //     new_arr.push(el)
    //   }
    // })
  
    arr.forEach(el =>el % 2===0? new_arr.push(el):'');
  
    return new_arr 
  }
  
  const getEvenNums2 = arr => arr.filter(el => el % 2 === 0);
  
  const evenNums = getEvenNums2([1, 2, 3, 4, 5, 6]); // [2, 4, 6] //s etim metodom mi daiom functiu s metodom filter sozdaiom novuiu peremennuiu masiv cotorii vernulsea v rezulitate raboti etoi functii
  // console.log(ewenNums);
  
  
  // 2. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длиннее 5 символов
  
  const getLongStrings = arr => {
    const new_arr = [];
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > 5){
        new_arr.push(arr[i])
      }
    }
  
    return new_arr
  }
  
  
  const getLongStrings1 = arr => arr.filter(el => el.lenght > 5);
  
  
  // 3. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длиннее 5 символов и содержащими букву 'e'/'E'
  
  
  const getLongStrings2 = arr => arr.filter(el => el.length > 5 && (el.includes('e') || el.includes('E')));//ternarnii operator
  
  // console.log(getLongString(['hello', 'hi', 'good morning', 'good evening'])); // ['good evening', 'hEllo!']
  
  
  // 4. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами
  
  const getNumbers = arr => arr.filter(el => typeof el === 'number');
  
  // console.log(getNumbers([true, 3, 'hello', 98, 150, undefined])); // [3, 98, 150]
  
  
  // 5. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами больше 50
  
  const getNumbers1 = arr => arr.filter(el => el > 50);
  
  // console.log(getNumbers1([true, 3, 'hello', 98, 150, undefined])); // [98, 150]
  
  
  // 6. Напишите функцию, которая принимает массив с числами и возвращает новый массив с положительными числами умноженными на 2
  
  const changeNums = arr => arr.filter(el => el > 0).map(el => el * 2);
  
  // console.log(changeNums([2, -4, 90, -10, -500, 6])); // [4, 180, 12]
  
  
  // ДЗ
  // 1. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа
  // 2. *Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые начинаются с буквы A.
  // 3. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа
  // 4. *Напишите функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы