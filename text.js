
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


// closure
function outerfunction (outVariable) {
  console.log('outer fucntion running');
  
  const innerfunction = (innerVariable) => {
    console.log(outVariable);
    console.log(innerVariable); 
  }
  return innerfunction
}

x = 15;
// console.log(x);


var x = 10;

// const func = outerfunction('outer value');
// func('inner value') //--> even I am accessing second fucntion first function data availiable here

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