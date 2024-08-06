const numbers = {
  age: 15,  
  name: 'raj',
  gender: 'male',
};

function printNumber ({ age, ...rest }) {
  console.log(age);
  console.log(rest);
}

printNumber(numbers);

const dataArray = [
  {
    name: '1new',
    child: [1,2,3,4,5]
  },
  {
    name: '1new',
    child: [1,2,3]
  },
  {
    name: '3new',
    child: []
  },
  {
    name: '4new',
    child: [1,2,3,4]
  }
];



