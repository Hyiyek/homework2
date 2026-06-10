// /5. `getGrade(score)` 함수를 만들고 점수에 따라 등급 문장을 돌려줍니다.
//     - 90점 이상이면 `A 등급입니다.`
//     - 80점 이상이면 `B 등급입니다.`
//     - 70점 이상이면 `C 등급입니다.`
//     - 그 외에는 `조금 더 연습합니다.`
function getGrade(score){
  if(score >= 90){
    console.log("A등급 입니다.")
  }
  else if(score >= 80){
    console.log("B등급입니다")
  }
  else if(score>= 70){
    console.log("C등급 입니다.")
  }
  else{
    console.log("그 외에는 조금더 연습합니다")
  }
}

getGrade(91)
getGrade(81)
getGrade(71)
getGrade(10)
