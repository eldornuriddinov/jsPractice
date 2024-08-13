// let a = '23'

// alert(typeof a);



// if (5 > 4) {
//     console.log('true');
    
// } else {
//     console.log('false');
    
// }


// for (let i = 1; i <= 10.; i++) {
//     console.log(i);
// }


// let name = prompt('Your name...')
// let age = prompt('Your age...')
// let city = prompt('Your city of residence...')

//  alert('Hi ' + a + ', you are ' + age + ' y.o, ' + "you live in " + city + ' city')
// alert(`Hi ${name}, you're ${age} y.o, you live in ${city} `)

// const fn = (name) =>{
//     alert(`Hello ${name}`)
// }

// fn('Eldor')



// OBJECTS
// let user = {
//     name: 'ELdor',
//     surname: 'Nuriddinov'

// }

// user.age = 16
// delete user.surname

// console.log(user);








// let num1 = +prompt('Enter first number')
// let num2 = +prompt('Enter second number')

// if (num1 == num2) {
//     alert(' Both equal to each other ')
// }else if(num1 < num2){
//     alert('Firs number is less than the second one')
// } else{
//     alert('First number is bigger than the second one ')
// }


// Четное & Не четное




// let number = +prompt('Enter a number')

// if(number == 0){
//     alert('Number equals zero')
// } else if(number % 2 == 0){
//     alert('Number is even')
// } else{
//     alert('Number is odd')
// }





//3 'Guess the number' Game

let secretNumber = Math.floor(Math.random() * 11)
let guess =  +prompt('Guess the number between 1 and 10')

 if(guess == secretNumber){
     alert('Congrats, you win!😎')
 } else{
     alert('Wrong 😡, YOU LOSE!')
 }

alert(secretNumber)