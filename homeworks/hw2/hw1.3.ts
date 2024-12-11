// - Знайти та вивести довижину настипних стрінгових значень
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello:string = 'hello world';
let lorem:string = 'lorem ipsum';
let js:string = 'javascript is cool';
hello.toUpperCase();
lorem.toUpperCase();
js.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
hello = 'HELLO WORLD';
lorem = 'LOREM IPSUM';
js = 'JAVASCRIPT IS COOL';
hello.toLowerCase();
lorem.toLowerCase();
js.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str:string = ' dirty string   ';
str.trim();

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
str = 'Ревуть воли як ясла повні';
let stringToArray = (str:string):string[] => {
    return str.split(' ');
}

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers:number[] = [10,8,-7,55,987,-1011,0,1050,0];
let copy:string[] = numbers.map((x:number):string => x.toString());

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums:number[] = [11,21,3];

let sortNums = (array:number[], direction:'ascending' | 'descending'):number[] => {
    if (direction === 'ascending') {
        return array.sort((a,b) => a - b)
    } else if (direction === 'descending') {
        return array.sort((a,b) => b - a)
    }
}

// ==========================
// - є масив
class CourseM {
    title: string;
    monthDuration: number

    constructor(title: string, monthDuration: number) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
}

let coursesAndDurationArray1:CourseM[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log('відсортувати його за спаданням за monthDuration')
let newArr:CourseM[] = coursesAndDurationArray.sort((a:CourseM,b:CourseM):number => {
    return b.monthDuration - a.monthDuration
})

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let copy3:CourseM[] = coursesAndDurationArray.filter((i:CourseM):boolean => i.monthDuration > 5)

class CourseWithId extends CourseM{
    id: number;

    constructor(id:number, title:string, monthDuration:number) {
        super(title, monthDuration);
        this.id = id;
    }
}
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let copy2:CourseM[] = coursesAndDurationArray.map((value:Course, index:number):CourseWithId=> {
    return  {id: index +1, ...value}
})

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
class Deck {
    suits: ['spade', 'diamond', 'heart', 'clubs'];
    values: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    colors: ['black', 'red'];
}

class Card {
    suit: 'spade' | 'diamond' | 'heart' | 'clubs';
    value: '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';
    color: 'black' | 'red';
}

const deck:Deck = {
    suits: ['spade', 'diamond','heart', 'clubs'],
    values: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    colors: ['black', 'red'],
};

let cards:Card[] = [];
function initializeDeck():void {
    for (let suit of deck.suits) {
        for (let value of deck.values) {
            let color:'black' | 'red' = (suit === 'spade' || suit === 'clubs')? 'black': 'red'
            cards.push({value: value, suit: suit, color: color});
        }}}
initializeDeck();

// - знайти піковий туз
let spadeAce:Card[] = cards.filter((card:Card):boolean => card.suit === 'clubs' && card.value === 'Ace')

// - всі шістки
let sixes:Card[] = cards.filter((card:Card):boolean => card.value === '6')

// - всі червоні карти
let reds:Card[] = cards.filter((card:Card):boolean => card.color === 'red')

// - всі буби
let diamonds:Card[] = cards.filter((card:Card):boolean => card.suit === 'diamond')

// - всі трефи від 9 та більше
let clubs:Card[] = cards.filter((card:Card):boolean => card.suit === 'clubs' && card.value >= '9')

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
class Cards {
    spade: Card[];
    diamond: Card[];
    heart: Card[];
    clubs: Card[];
}

let newCards:Cards = cards.reduce((acc:Cards, card:Card):Cards => {
    acc[card.suit].push(card);
    return acc;
}, {spade:[], diamond:[], heart:[], clubs:[]});
console.log(newCards)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
class CourseLarge extends CourseM{
    hourDuration: number;
    modules: string[];
    constructor( title:string, monthDuration:number, hourDuration: number, modules: string[]) {
        super(title, monthDuration);

        this.hourDuration = hourDuration;
        this.modules = modules;
    }
}

let coursesArray:CourseLarge[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let sass:CourseLarge[] = coursesArray.filter((a:CourseLarge):boolean => a.modules.includes('sass'))
console.log(sass)

// --написати пошук всіх об'єктів, в який в modules є docker
let docker:CourseLarge[] = coursesArray.filter((a:CourseLarge):boolean => a.modules.includes('docker'))
console.log(docker)