// Function

// let userName = "Kutman"

// hello("Kutman", "Nazima", "Jakyp");

// function hello(name, name2, name3) {
    // hosting
//     alert(" Hello " + name);
//     alert(" Hello " + name2);
//     alert(" Hello " + name3);
// }

// -------------Return--------------
// const user = {
    // key : value
//     name: 'Kutman',
//     phone: '+996712093127',
//     email: 'dahhdsjadi@gmail.com',
//     city: 'Tashkent'
// }

// function getSomeKey(key, obj) {
//     return {
//         [key]: obj[key],
//     }
// }
// const name = getSomeKey('name', user)
// const phone = getSomeKey('phone', user)
// const email = getSomeKey('email', user)
// const city = getSomeKey('city', user)
// console.log("name: ", name);
// console.log("phone: ", phone);
// console.log("email: ", email);
// console.log("city: ", city);

// -----------Виды функции----------------

// function declaration v1
function declarationFn(){
    console.log("I'm declaration function");
}

// function expression v2
const expressionFn = function () {
    console.log("I'm expressionFn function");
}

// arrow function v3
const arrowFn = () =>{
    console.log("I'm arrow function");
}

// --------------Calculator--------------------
const Calculator = {
    summa: (a, b) => a + b,
    min: (num, num2) => num - num2,
    multiply: (um, um2) => um * um2,
    divide: (bo, bo2) => bo / bo2,
    pow: (p, p2) => p ** p2,
}

const res = Calculator.pow(5, 2)
console.log("res:", res);

// callbackFunction
const array1 = ['item', 'item2', 'item3']

const array2 = ['item4']


function getArray(arr1, arr2){
    if(arr1.length > arr2.length) {
        return arr1
    } else if (arr2.length > arr1.length){
        return arr2
    }else {
        return"Они равны"
    }
}

const newArr = getArray(array1, array2)
console.log("newArr: ", newArr);