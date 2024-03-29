/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (!str) return str; // пустая строка
  
  const arr = str.split(' ');

  arr.forEach((word, index) => {
    if (word) {
      arr[index] = word[0].toUpperCase() + word.slice(1);
    }
  });

  return arr.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
