// map, filter, arrow function
// given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

// const input = [1, 2, 3, 4, 5];
// const newArr = [];
// for(let i=0; i<input.length; i++){
    // newArr[i] = input[i] * 2;
    // newArr.push(input[i]*2);
// }
// console.log(newArr);


// const input = [1, 2, 3, 4, 5];
// function transformation(i){
    // return i * 2;
// };
// const ans = input.map(transformation);
// console.log(ans);
// console.log(input === ans);

// create a map function that takes 2 inputs 
// an array, and a transformation callback/fn
// and transforms the array into a new one using
// the transformation fn

// Filter :
const arr = [1,2,3,4,,5,6];
function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
const ans = arr.filter(filterLogic);
console.log(ans);