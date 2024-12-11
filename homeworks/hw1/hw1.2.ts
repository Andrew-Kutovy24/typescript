// `Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль`
let arr1:any[] = [23, 45, 'gghfg', 6756, -4534, 'fgfgfg', 545, 456, 65, 6];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.`
class Book {
    constructor(title: string, pageCount: number, genre: string) {
    }
}

let obj1_1:Book = {
    title: 'hghghg',
    pageCount: 432,
    genre: 'dsfdsfds'
};
let obj1_2:Book = {
    title: 'hgdfs',
    pageCount: 433,
    genre: 'dsfdsfds'
};
let obj1_3:Book = {
    title: 'hghghg',
    pageCount: 432,
    genre: 'dsfdsfds'
};

console.log(obj1_1, obj1_2, obj1_3);

// `- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.`
class Author {
    name:string;
    age:number;
}

class BookLarge extends Book{
    constructor(title: string, pageCount: number, genre: string, authors: Author[]) {
        super(title, pageCount, genre);
    }
}

let obj2_1:BookLarge = {
    title: 'hghghg',
    pageCount: 432,
    genre: 'dsfdsfds',
    authors: [
        {
            name: 'Dfffdg',
            age: 43
        },
        {
            name: 'dfgfgfd',
            age: 65
        }
    ]
};
let obj2_2:BookLarge = {
    title: 'hghghg',
    pageCount: 432,
    genre: 'dsfdsfds',
    authors: [
        {
            name: 'Dfffdg',
            age: 43
        },
        {
            name: 'dfgfgfd',
            age: 65
        }
    ]
};
let obj2_3:BookLarge = {
    title: 'hghghg',
    pageCount: 432,
    genre: 'dsfdsfds',
    authors: [
        {
            name: 'Dfffdg',
            age: 43
        },
        {
            name: 'dfgfgfd',
            age: 65
        }
    ]
};
console.log(obj2_1, obj2_2, obj2_3)

// `- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача`
class User {
    name: string;
    username: string;
    password: string;
}

let arr2:User[] = [
    {
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },{
        name: "Dfgfg",
        username: "ddfffgdf",
        password: "fgdfgdfgfd"
    },
];
console.log(arr2[0]['password']);
console.log(arr2[1]['password']);
console.log(arr2[2]['password']);
console.log(arr2[3]['password']);
console.log(arr2[4]['password']);
console.log(arr2[5]['password']);
console.log(arr2[6]['password']);
console.log(arr2[7]['password']);
console.log(arr2[8]['password']);
console.log(arr2[9]['password']);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу`
class Temp {
    morning: number;
    dinner: number;
    evening: number;

    constructor(morning: number, dinner: number, evening: number) {
        this.morning=morning;
        this.dinner=dinner;
        this.evening=evening;
    }
}

class DayTemperature {
    mon?: Temp;
    tue?: Temp;
    wed?: Temp;
    thu?: Temp;
    fri?: Temp;
    sat?: Temp;
    sun?: Temp;

    constructor(
        mon?: Temp,
        tue?: Temp,
        wed?: Temp,
        thu?: Temp,
        fri?: Temp,
        sat?: Temp,
        sun?: Temp
    ) {
        this.mon = mon;
        this.tue = tue;
        this.wed = wed;
        this.thu = thu;
        this.fri = fri;
        this.sat = sat;
        this.sun = sun;
    }
}

let arr3: DayTemperature[] = [
    { mon: new Temp(23, 30, 22) },
    { tue: new Temp(23, 30, 22) },
    { wed: new Temp(23, 30, 22) },
    { thu: new Temp(23, 30, 22) },
    { fri: new Temp(23, 30, 22) },
    { sat: new Temp(23, 30, 22) },
    { sun: new Temp(23, 30, 22) }
];

// "Логічні розгалуження:"

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3"
let x: number = 1;
if(x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}
x = 0;
if(x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}
x = -3;
if(x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

// `- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).
let time:number = 59;
if (time <= 15) {
    console.log('першу');
} else if (time > 15 && time <= 30) {
    console.log('другу');
} else if (time > 30 && time <= 45) {
    console.log('третю');
} else {
    console.log('четверту')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).
let day:number = 21;
if (day <= 10) {
    console.log('першу');
} else if (day > 10 && day <= 20) {
    console.log('другу');
} else {
    console.log('третю')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day1:number = 5;
switch (day1) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log(' it must be a number from 1 to 7')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.`
let num1:number = 14;
let num2:number = 11;
if (num1 > num2){
    console.log(num1)
} else if (num1 < num2){
    console.log(num2)
} else if (num1 === num2){
    console.log('the numbers are equal')
}

// `- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
// falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).`
let xx: any;
xx = 0;
if (!xx){
    xx = "default";
    console.log(xx);
} else{
    console.log(xx)
}

// `- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за
// 5 місяців вивести в консоль "Супер".`
class Course {
    title: string;
    monthDuration: number
}
let coursesAndDurationArray: Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0]["monthDuration"] > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[1]["monthDuration"] > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[2]["monthDuration"] > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[3]["monthDuration"] > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[4]["monthDuration"] > 5){
    console.log("Супер")
}
if (coursesAndDurationArray[5]["monthDuration"] > 5){
    console.log("Супер")
}