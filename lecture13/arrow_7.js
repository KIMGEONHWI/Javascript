const outer = (x) => () => x*x;
//내부함수 형태 변경

const innerFuc = outer(10);
const result = innerFuc();
console.log(result);