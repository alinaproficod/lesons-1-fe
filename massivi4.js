// ДЗ

// 4. *Напишите функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы


const getUniqueElem = arr => {
    const new_arr = [];

    arr.forEach(el => {
        if(!new_arr.includes(el)){ // ! znak rabotaet toliki s true i folse
            new_arr.push (el)
        }



    })
    return new_arr

}

  
  // console.log(getUmiqueElem([1, 2, 3, 3, 3, 4, 4, 5]0); // [1, 2, 3, 4, 5]
  //Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
 // primer: const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


  //Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
  //const array = [2, 5, 9];
 // array.indexOf(2); // 0
  //array.indexOf(7); // -1
  //array.indexOf(9, 2); // 2
 // array.indexOf(2, -1); // -1
 // array.indexOf(2, -3); // 0 

 const getUmiqueElem  = arr => arr.filter((element, index, array) => array.indexOf(element)=== index);
 
  
  // Пример использования:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = uniqueElements(inputArray);
  // console.log(resultArray); // Выведет [1, 2, 3, 4, 5]
  
  
  
  // Array methods
  
  // .forEach(el => {}) - выполняет переданную функцию для каждого элемента массива, ничего не возращает
  // .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву
  
  // .filter(el => {}) - возвращает новый массив, в который попадут только ВСЕ те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию
  
  // .find(el => {}) - возвращает ОДИН элемент (первый), который отвечают переданному в callback-функцию условию
  
  // .reduce()
  // .sort()
  
  
  const names = ['Anna', 'Ivan', 'Boris', 'Anna', 'Anton', 'Anton'];
  
  const boris_filter = names.filter(el => el === 'Boris'); //['Boris'] verniot massiv
  const boris_find = names.find(el => el === 'Boris');//'Boris' verniot stroku . index ili bulevoe znacenie metod (find)
  
  const anna_filter = names.filter(el => el === 'Anna');//verniot ['Anna', 'Anna']
  const anna_find = names.find(el => el === 'Anna'); //'Anna' nahodit pervii element i perestaiot rabotati
  
  // console.log(boris_filter); // ['Boris']
  // console.log(boris_find); // 'Boris'
  
  // console.log(anna_filter); // ['Anna', 'Anna']
  // console.log(anna_find); // 'Anna'
  
  
  // Задачи на метод find()
  
  // 1. Найти первый четный элемент в массиве чисел.
  
  const numbers = [23, 26, 31, 27, 32, 35];
  const first_even_num = numbers.find(el =>  el % 2===0);
  
  // console.log(first_even_num);
  
  
  // 2. Написать функцию, которая принимает массив и возвращает первую строку из этого массива, содержащую определенное ключевое слово.
  
  const getFirstStr = arr => arr.find (el=> el.toLowerCase(). icludes('hello'));
  
  // 3. Написать функцию, которая принимает массив и возвращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.
  
  const getAllStrs = arr => arr.filter(el => el.toLowerCase().includes('hello'));
  
  
  // 'hello'
  // ['hello, world', 'hi', 'Hello, Anton']
  
  // console.log(getFirstStr(['hello, world', 'hi', 'Hello, Anton'])); // 'hello, world'
  // console.log(getAllStrs(['hello, world', 'hi', 'Hello, Anton'])); // ['hello, world', 'Hello, Anton']
  
  
  // 4. Написать функцию, которая принимает массив и ключевое слово и возвращает первую строку из этого массива, содержащую определенное ключевое слово.
  
  const getFirstStr1 = (arr, key_word) => arr.find(el => el.toLowerCase().includes(key_word)); // key_word eto kliucevoe slovi (word - peredano v cacestve vtorogo argumenta)
  
  // 5. Написать функцию, которая принимает массив и ключевое слово и возвращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.
  
  const getAllStrs1 = (arr, key_word) => arr.filter(el => el.toLowerCase().includes(key_word));
// console.log(getFirstStr1(['hello, world', 'hi', 'Hello, Anton'], 'hello')); // 'hello, world'
// console.log(getAllStrs1(['hello, world', 'hi', 'Hello, Anton'], 'hi')); // ['hi']


// 6. Найти первый элемент, который является положительным и четным числом
const nums = [-10, 1, 31, 34, -64, 56, 84];

const firstNum = nums.find(el => el > 0 && el % 2 === 0);

// 7. Найти все элементы, которые являются положительными и четными числами

const allNums = nums.filter(el => el > 0 && el % 2 === 0);


// console.log(firstNum); // 34
// console.log(allNums); // [34, 56, 84]  