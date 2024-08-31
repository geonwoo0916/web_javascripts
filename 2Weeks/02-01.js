let arr = [];

arr[0] = 'apple';
arr[1] = 'banana';
arr[2] = 'cherry';

// arr.shift();
// arr.pop();
// arr.push('grape');
// arr.unshift('mango');
arr.splice(1,1)

let index = arr.indexOf('mango');

console.log(arr);
console.log(`배열 fruits의 길이는 ${arr.length}입니다.`);
console.log(`0 번째 : ${arr[0]}, 마지막 번째 : ${arr[2]}`);


console.log(`${arr[0]}는 ${index}에 있습니다.`);