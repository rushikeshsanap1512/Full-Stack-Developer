function sumOneToNumber(number){
  let count = 0;
  for(let i=1; i <= number; i++){
    count = count + i;
  };
  return count;
}

console.log(sumOneToNumber(10));
console.log(sumOneToNumber(100));

