// ### 2번. `sumBetween(startValue, endValue)` 함수를 만듭니다.

// - 두 값을 숫자로 바꿉니다.
// - 둘 중 하나라도 숫자로 바꿀 수 없거나 정수가 아니면 `0`을 돌려줍니다.
// - 시작값이 끝값보다 크면 `0`을 돌려줍니다.
// - 시작값부터 끝값까지의 합계를 돌려줍니다.

// 확인할 값입니다.

// - `sumBetween("1", "5")`의 결과는 `15`입니다.
// - `sumBetween("3", "3")`의 결과는 `3`입니다.
// - `sumBetween("5", "1")`의 결과는 `0`입니다.
// - `sumBetween("1.5", "3")`의 결과는 `0`입니다.

function sumBetween(startValue,endValue){
  const count = Number(startValue)
  const count2 = Number(endValue)
  if(count%1 !==0||count2%1 !==0){
    return 0;}
    if(count>count2){
      return 0;
    }
    let sum = 0;
    for(let i =count; i<=count2; i++){
      sum = sum+=i;
    }
    return sum;
  }
  console.log(sumBetween("1","5"))