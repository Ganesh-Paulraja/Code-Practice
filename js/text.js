
// const numbers = {
//   age: 15,  
//   name: 'raj',
//   gender: 'male',
// };

// function printNumber ({ age, ...rest }) {
//   console.log(age);
//   console.log(rest);
// }

// printNumber(numbers);

// const dataArray = [
//   {
//     name: '1new',
//     child: [1,2,3,4,5]
//   },
//   {
//     name: '1new',
//     child: [1,2,3]
//   },
//   {
//     name: '3new',
//     child: []
//   },
//   {
//     name: '4new',
//     child: [1,2,3,4]
//   }
// ];

// arrFun();

// var arrFun = () => {
//   console.log('arrow')
// }
hostingFun()

function hostingFun () {
  console.log('hosting');
}


// closure
function outerfunction (outVariable) {
  console.log('outer fucntion running');
  
  const innerfunction = (innerVariable) => {
    console.log(outVariable);
    console.log(innerVariable); 
  }
  return innerfunction
}

// const func = outerfunction('outer value');
// func('inner value') //--> even I am accessing second fucntion first function data availiable here

x = 15;
// console.log(x);


var x = 10;

//Palindrom check
const PalindromCheck = (str) => {
  const reverseStr = str.split('').reverse().join(''); // semicolon must
  (str === reverseStr) 
  ? console.log('This string is palindrom') 
  : console.log('This string is not palindrom');
}
// PalindromCheck('dom')

function scopeFunction () {
  var age = 18;
  if (age === 18) {
    var height = 5.5;
    // let weight = 58;
  }
  console.log(height , weight);
}
// scopeFunction()

// arrowFucntion()
const arrowFucntion = () => {
  console.log('arrowFunction')
}


const arr = [1, 2, 3, 4, 5];
const arrTwo = [6, 7, 8, 9];
// arr.forEach((val, i , arr) => {
  
// })
console.log( arr)


app.options('/users', (req, res) => {
  res.set('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
  res.sendStatus(204); // No content
});