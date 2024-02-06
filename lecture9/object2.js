let student1 = {
    koreaScore:90,
    "englishScore":70,
    'mathScore':80,
    scienceScore:60
};

//대괄호 연산자
console.log(student1["englishScore"]);

//점(닷, 마침표) 연산자 =>객체의 키에 공백이 있으면 인식 X
console.log(student1.mathScore);