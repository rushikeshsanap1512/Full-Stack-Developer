function canVote(age){
  if(age > 18){
    return true;
  }
  else{
    return false;
  }
}

console.log(canVote(24));
console.log(canVote(18));
console.log(canVote(15));
