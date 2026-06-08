//printStars(maxLine) 함수를 만들고 printStars(4)를 실행했을 때 아래 모양이 출력되게 합니다. maxLine은 출력할 줄 수입니다. 오늘은 .repeat()를 쓰지 말고 반복문과 문자열 이어 붙이기로 풉니다.

function printStars(maxLine){
  for(let i = 0; i<=4; i++){
    let star = "";
    for(let j = 0; j<=i-1; j++){
      star = star+="*";
    }
    console.log(star)
  }
}
printStars(4);
