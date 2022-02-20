/* ========== Destructiong of Object ========== */
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

console.log(fullname, 'is a', profession, '. He works with', forntend)


/* ========== Destructiong of Array ========== */
const arry = ['First One', 'Second One', 'Third One', 'Forth One']
const [a, b] = arry;
/* If you set Extra array element than vairables - it'll take first two */

console.log(`${a} and ${b}`) 