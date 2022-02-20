/* ========== Destructuriong of Object ========== */
const riyad = {
    fullname: 'Riyad Hossain',
    age: 20,
    profession: 'web Developer',
    country: 'BD',
    workWith: {
        web: 'html',
        interactivity: 'js',
        framework: {
            forntend: 'React'
        }
    }
}

const { fullname, profession } = riyad;

const { forntend } = riyad.workWith.framework;

// console.log(fullname, 'is a', profession, '. He works with', forntend)


/* ========== Destructuriong of Array ========== */
const arry = ['First One', 'Second One', 'Third One', 'Forth One']
const [a, b] = arry;
/* If you set Extra array element than vairables - it'll take first two */

// console.log(`${a} and ${b}`) 


/* ========== Array.map() ========== */  /* Return the same Array which was input in the parameter doing some calculation with the elements of the array */ 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const double = numbers.map(x => x * 2)
const thriple = numbers.map(x => x * 3)


// console.log(double)
// console.log(thriple)



/* ============= Simple Array of Object ============= */
const elements = [
    {name: 'Mobile', price: 50000},
    {name: 'Phone', price: 12000},
    {name: 'Pen', price: 10},
    {name: 'Oil', price: 200}
]

const productName = elements.map(x => x.name);

 elements.forEach(x => console.log(x.price))  /* forEach Method */

// console.log(productName)


/* ========== Array.filter() ========== */  /* Return - an Array containg specific elements */  
const expensiveItem = elements.filter(x => x.price > 10000)
console.log(expensiveItem)


/* ========== Array.find() ========== */ /* Return - an element */  
const firstChoice = elements.find(x => x.price > 40)
console.log(firstChoice)