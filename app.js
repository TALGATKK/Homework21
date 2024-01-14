const brandnames = [
  "Apple",
  "MIcrosoft",
  "Nike",
  "Samsung",
  "Reebok",
  "Panasonic",
  "LG",
  "Sony",
  "Adidas",
];

// Применен фильтр - больше 6 символов:
const result = brandnames.filter((filtered) => filtered.length > 6);
console.log("Без фильра", brandnames);
console.log("Применен фильтр - больше 6 символов:", result);
// Применен sort - отсортирован по алфавиту
var result4 = brandnames.sort();
console.log("Применен sort - отсортирован по алфавиту", result4);
//Применен reduce - все цифры в массиве суммируются
var arr = [3, 5, 7, 9, 11, 13, 15];
var result2 = arr.reduce((sum, current) => sum + current);
console.log("Все цифры", arr);
console.log("Применен reduce - все цифры в массиве суммируются:", result2);
//Применен map - к каждой цифре добавили 5
var result3 = arr.map((num) => num + 5);
console.log("Все цифры", arr);
console.log("Применен map - к каждой цифре добавили 5", result3);
