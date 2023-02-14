{
    // person 데이터 객체 생성
    // {프로퍼티, ...}
    // 프로퍼티 -> 프로퍼티 키 : 프로퍼티 값
    const person = {
        "name" : "홍길동",
        "age" : 30,
        "car" : {
            "type" : "suv",
            "color" : "검정"
        },
        "hobby" : ['등산','골프','수영']
    }

    // person 객체 탐색 
    // 1. 점(.) 
    console.log(`이름 = ${person.name}`);
    console.log(`취미3 = ${person.hobby[2]}`);
    for(let ele of person.hobby){
        console.log(ele);
    }
    // 2. [프로퍼티 키]
    console.log(`이름 = ${person['name']}`);
    console.log(`취미3 = ${person['hobby'][2]}`);
    for(let ele of person['hobby']){
        console.log(ele);
    }
    // for ~ in : 프로퍼티 키 탐색
    for(let prop in person){
        console.log(person[prop]);
    }
}