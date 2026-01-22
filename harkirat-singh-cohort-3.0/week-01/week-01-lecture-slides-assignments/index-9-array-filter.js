let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter() Method : For even numbers
let result = arr.filter((even) => even % 2 == 0);
console.log(result);

// Filter() Method : For odd numbers
let result2 = arr.filter((odd) => odd % 2 != 0);
console.log(result2);