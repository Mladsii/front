
const Stepen=(x,n)=> {

  let result = x;

  for (let i= 1 ; i<n; i++){
    result *= x;
  }
  return result
}

const result = Stepen(10,10)
console.log(result)