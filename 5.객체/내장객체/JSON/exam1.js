{
    const v1 = 1;  //number
    const v2 = [];  //object(배열)
    const v3 = {};  //object(객체)
    const v4 = '';  //object(String, 문자열)
    const v5 = '{"name" : "홍길동", "age" : 30}';  //문자열
    const v6 = { name : "홍길동", age : 30};  

    console.log(v6['name']);    //홍길동
    console.log(v6.name);       //홍길동

    const v7 = JSON.parse(v5);  // JSON포맷 문자열 => js 객체
    console.log(v7.name);       //홍길동
    console.log(v7.age);        //30
    
    v7.name = '홍길순';
    v7.age = 20;

    const v8 = JSON.stringify(v7);  //js 객체 => JSON포맷 문자열
    console.log(v8);                //{"name":"홍길순","age":20}
    console.log(typeof(v8));        //string

    console.log(v8.name);           //undefined
    console.log(v8.age);            //undefined
}
