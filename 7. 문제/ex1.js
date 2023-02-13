// 문제1)  1~10까지의 합을 구하시오
// for
{
    let result = 0;
    for(let i = 1; i<=10; i++){
        result += i;
    }
    console.log(`1~10 합: ${result}`);
}
// while
{
    let result = 0;
    let i = 1;
    while(i<=10){
        result += i;
        i++;
    }
    console.log(`1~10 합: ${result}`);
}
// do-while
{
    let i = 1;
    let result = 0;
    do{
        result += i;
        i++;
    }while(i<=10);
    console.log(`1~10 합: ${result}`);
}
// 문제2) 1~10까지 짝수의 합을 구하시오(단, for ~ of 구문 사용)
{
    const arr = [1,2,3,4,5,6,7,8,9,10];
    let result = 0;
    for(let i of arr){
        if(i%2==0){
            result+=i;
        }
    }
    console.log(`1~10 짝수의 합: ${result}`);
}
{
    // 배열 생성 함수 추가(1부터 시작)
    const arr = [];
    function number(x){
        for(let i=0; i<10; i++){
            arr[i]=i+1;
        }
        return arr;
    }
    const arr2 = number(10);
    let result = 0;
    for(let i of arr2){
        if(i%2==0){
            result+=i;
        }
    }
    console.log(`1~10 짝수의 합: ${result}`);
}
// 문제3) 1~10까지의 정수값을 배열에 저장하고 홀수의 합과 짝수의 합을 각각 구하시오(단, for~of 구문 사용)
{
    // 배열 생성 함수 추가(1부터 시작)
    const arr = [];
    let sumOfOdd = 0;
    let sumOfEven = 0;
    for(let i=0; i<10; i++){
        arr[i]=i+1;
    }
    console.log(arr);
    for(let ele of arr){
        if(ele%2 == 0){
            sumOfEven += ele;
        }else{
            sumOfOdd += ele;
        }
    }
    console.log(`1~10 짝수의 합: ${sumOfEven}`);
    console.log(`1~10 홀수의 합: ${sumOfOdd}`);
}
// 문제4) 두개의 양의 정수값을 매개값으로 입력받아 두 정수사이의 정수값들의 합을 계산하여 반환하는 함수를 구현하시오.
// 1) 함수정의문
{
    function sum(v1,v2){
        let result = 0;
        if(v1 < 1 || v2 < 1){
            throw new Error('양의정수가 아닙니다!');
        }
        if(v1>=v2){
            for(let i=v2; i<=v1; i++){
                result += i;
            }
        }else{
            for(let j=v1; j<=v2; j++){
                result += j;
            }
        }
        return result;
    }
    try{
        const total = sum(-30,20);
        console.log(`두 정수사이의 정수값들의 합: ${total}`);
    }catch(e){
        console.error(e.message);
    }
}
// 2) 함수표현식
{
    const sum = function(v1,v2){
        let result = 0;
        if(v1 < 1 || v2 < 1){
            throw new Error('양의정수가 아닙니다!');
        }
        if(v1>=v2){
            for(let i=v2; i<=v1; i++){
                result += i;
            }
        }else{
            for(let j=v1; j<=v2; j++){
                result += j;
            }
        }
        return result;
    }
    try{
        const total = sum(30,20);
        console.log(`두 정수사이의 정수값들의 합: ${total}`);
    }catch(e){
        console.error(e.message);
    }
}
// 3) 화살표함수
{
    const sum = (v1,v2) => {
        let result = 0;
        if(v1 < 1 || v2 < 1){
            throw new Error('양의정수가 아닙니다!');
        }
        if(v1>=v2){
            for(let i=v2; i<=v1; i++){
                result += i;
            }
        }else{
            for(let j=v1; j<=v2; j++){
                result += j;
            }
        }
        return result;
    }
    try{
        const total = sum(30,20);
        console.log(`두 정수사이의 정수값들의 합: ${total}`);
    }catch(e){
        console.error(e.message);
    }
}