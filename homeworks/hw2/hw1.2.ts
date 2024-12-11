// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calculateRectangle = (a:number, b:number):number => {
    return a * b;
};

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const Pi:number = 3.14;
let circleArea = (radius:number):number => {
    return Pi * radius*2;
};

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let surfaceArea = (height:number, radius:number):number => {
    return  2 * Pi * radius * height + 2 * Pi * radius*2;
};

// - створити функцію яка приймає масив та виводить кожен його елемент
let printer = (array:any[]):void => {
    for (let item of array) console.log(item);
};

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textBuilder = (text:string):void => {
    return document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let liBuilder = (text:string):void => {
    return document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let customLiBuilder = (text:string, count:number):void => {
    document.write('<ul>');
    for (let i=0; i<count; i++) document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listOfArray = (array: any[]):void => {
    document.write('<ul>');
    for (let item of array) document.write(`<li>${item}</li>`);
    document.write('</ul>');
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
class User {
    id: number;
    name: string;
    age: number;
}
let objBuilder = (array:User[]):void => {
    for (let obj of array) {
        document.write('<div>');
        for (let key in obj) {
            document.write(`<p>${key}: ${obj[key]}</p>`)
        }
        document.write('</div>');
    }
}

// - створити функцію яка повертає найменьше число з масиву
let minimizer = (array:number[]):number => {
    let min = array[0];
    for (let item of array) {
        if (item < min) min =item;
    }
    return min;
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum = (arr:number[]):number => {
    let summa:number = 0;
    for (let num of arr) summa += num;
    return summa;
}

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr:number[], index1:number, index2:number):number[] => {
    let [val1, val2] = [arr[index1], arr[index2]];
    [arr[index1], arr[index2]] = [val2, val1];
    return arr
}

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
class CurrencyValue {
    currency: 'USD' | 'EUR';
    value: number;
}
let exchange = (sumUAH:number, currencyValues:CurrencyValue[], exchangeCurrency:'USD' | 'EUR'):void => {
    let value:number;
    for (let i = 0 ; i<currencyValues.length; i++){
        if (exchangeCurrency === currencyValues[i].currency) value = +currencyValues[i].value
    } console.log(sumUAH/value)
}