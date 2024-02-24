

const arr1 = [2,3,5]
const arr2 = [2,3]
const arr3 = [3,2,7]
//reduce

const a = arr1.reduce((acc, item) => {
    return acc += item;
}, 0)

console.log(a);

//filter 
const b = arr1.filter((item, index) => {
    if(index > 1) {
        return item;
    }
})


console.log(b);

//map
const c = arr1.map((item) => item * 2);

console.log(c);


const d = arr1.find((index) => index === 3);

console.log(d);
