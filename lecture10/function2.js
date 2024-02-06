//함수 표현식 방법
const gugudan = function gugudan(){
    console.log("3 * 1 = 3");
    console.log("3 * 2 = 6");
    console.log("3 * 3 = 9");
    console.log("3 * 4 = 12");
    console.log("3 * 5 = 15");
    console.log("3 * 6 = 18");
    console.log("3 * 7 = 21");
    console.log("3 * 8 = 24");
    console.log("3 * 9 = 27");
}; //세미클론 꼭! 찍어주자
gugudan(); //변수의 이름으로 호출이 된건지?함수의 이름으로 호출 된건지? => 변수 이름으로만 호출 가능
//함수 이름이 없어도 실행 가능 => 익명 함수(Anonymous function)