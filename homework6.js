// ### 1번. `countOddNumbers(limitValue)` 함수를 만듭니다.

// - `limitValue`를 숫자로 바꿉니다.
// - 숫자로 바꿀 수 없거나, 정수가 아니거나, 1보다 작으면 `0`을 돌려줍니다.
// - 1부터 `limitValue`까지 홀수가 몇 개인지 돌려줍니다.

// 확인할 값입니다.

function countOddNumbers(limitValue){
  const number = Number(limitValue)
  if(number<1){ // 1보다 작으면 0을 돌려준다 
    return 0;
  }
  if(number%1!==0){ // 나머지가 0이면 정수이기때문에
    return 0;
  }
  let count = 0;
  for(let i = 1; i<=number; i++){
    if(i%2===1){
      count++
    }
  }
  return count;
}
console.log(countOddNumbers("7"))
console.log(countOddNumbers("4"))