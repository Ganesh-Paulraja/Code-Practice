let p = new Promise((resolve, reaject) => {
  a = 1 + 1;
  if (a === 3) {
    resolve('Success')
  } else {
    reaject('failed')
  }
})

p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
})


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];
arr2[2] = 100;

// console.log(arr1);
// console.log(arr2);
// console.table({
//   arr1 : arr1,
//   arr2: arr2,
// })

const pocketMoney = [1, 2, 3, 4, 5];

// const totalMoney = pocketMoney.reduce((total, money) => total + money, 0);
const totalMoney = pocketMoney.reduce((val, i) => {
  console.log(val);
})
// console.log(totalMoney);