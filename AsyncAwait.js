// console.log('Person1: shows ticket');
// console.log('Person2: shows ticket');

// const promiseWifeBringTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     }, 3000)
// })

// const getPopcorn = promiseWifeBringTickets.then((t) => {
//     console.log('Wife: I have tickets');
//     console.log(`Hasband: we should get in`);
//     console.log(`Wife: no i am hungry`);

//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`);
//     })
// })

// const getButter = getPopcorn.then((t) => {
//     console.log('Hasband: I have Popcorn');
//     console.log(`Hasband: we should get in`);
//     console.log(`Wife: no i need butter on popcorn`);

//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`);
//     })
// })

// getButter.then((t) => console.log(t));


// console.log('Person4: shows tickets');
// console.log('Person5: shows tickets');


console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    })
    let ticket
    try{
         ticket = await promiseWifeBringTickets;
    }
    catch(e){
        ticket = 'Sad face'
    }
    
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getButter = new Promise((resolve, reject) => resolve('butter'));
    const getCooldrinks = new Promise((resolve, reject) => resolve('Cooldrinks'));

    
    let [popcorn, butter, cooldrinks] = await Promise.all([getPopcorn, getButter, getCooldrinks]);
    console.log(`${popcorn} ${butter} ${cooldrinks}`);
    return ticket;
}

preMovie().then((t) => console.log(`Person3 shows ${t}`));

console.log('Person4: shows tickets');
console.log('Person5: shows tickets');