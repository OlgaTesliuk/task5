//1   створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//function ploshcha(a, b){
// let rezalt = (a * b)/2 ;
// return rezalt;
//}
//let d = ploshcha(2,6);
//console.log(d);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function ploshchaKruga(R){
// const P = 3.14;
// let rezalt = P * R^2;
// return rezalt;
// }
//let c = ploshchaKruga(6);
//console.log(c);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//function ploshchaC(h, r){
//const P = 3.14;
// let rezalt = P * r^2 * h;
// return rezalt;
//}
//console.log(ploshchaC(3, 7));
//
//- створити функцію яка приймає масив та виводить кожен його елемент
//function printArr(array){
//  for(let item of array){
//  console.log(item);
//  }
//}
//let arr = [1, 7, 8, true, "bvfhsbv"];
//printArr(arr);
//---------------------------------------------------------------------------
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf( text){
// console.log(`<p>${text}</p>`);
// }
// paragraf("ljnvkjdnvkjnvkjn");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(text){
// console.log(`
// <ul>
//   <li>&{text}</li>
//   <li>&{text}</li>
//   <li>&{text}</li>
// </ul>
// `);
// }
// ul('hfhbvkdbks');
//--------------------------------
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul(text,a){
// console.log(`
// <ul>
// for(let i =0; i<a; i++){
//     <li>&{text}</li>
//   }
// </ul>
// `);
// }
// ul('hfhbvkdbks',3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//  function spysArr(arr){
//  for(let item of arr){
//  console.log(item)
//  }}
//  let array =[1,1,5, "dfgdfggfh"];
//  spysArr(array);
//???????????????????????????????
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function abc(arr[id, name, age]){
for(let arrElement of arr){
document.write(arrElement.id, arrElement.name, arrElement.age);
}
}
users =[
{id: 9, name: vsia, age: 31},
{id: 7, name: katia, age: 43}
{id: 8, name: rabert, age: 32}
]
abc(users);
////- створити функцію яка повертає найменьше число з масиву
//function arrNin(arr){
//let min = arr[0];
//  for(let i of arr){
//  if(min > i){min = i;
//  }
//     }
//     return min;
//}
//
//let arr = [90,77,5,4,3,77,2];
//console.log(arrNin(arr));
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr = [90,77,5,4,3,77,2];
function sumArr(arr){
let sum = 0;
for(let i of arr){

sum+= i;
}
return sum;
}
console.log(sumArr(arr));