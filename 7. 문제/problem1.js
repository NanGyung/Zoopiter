// 문제1)  1~10까지의 합을 구하시오
{ 
    // 1) for문
    let result = 0;
    for(let i = 1; i <= 10; i++){
        result = result + i;
    }
    console.log(`1~10까지 합: ${result}`);
}

{
    // 2) while문
   let i = 1;  
   let result = 0;
   while(i <= 10){
       result += i;
       i++;
   }
   console.log("1~10까지 합: "+result);
}

{
    // 3) do~while문
    let i = 1;
    let result = 0;
    do{
        result += i;
        i++;
    }while(i <= 10);
    console.log("1~10까지 합: "+result);
}
   

// 문제2) 1~10까지 짝수의 합을 구하시오(단, for ~ of 구문 사용)
{
    const number = {
       "num" : [1,2,3,4,5,6,7,8,9,10]
    }

    let sum = 0;
    for(let i of number['num']){
        if(i%2 == 0){
            sum += i;
        }
    }
    console.log(`1~10까지 짝수의 합: ${sum}`);
}
{
    // solution
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let sum = 0;
    for(let ele of arr){
        if(ele%2 == 0){
            sum += ele;
        }
    }
    console.log(`1~10까지 짝수의 합: ${sum}`);
}



// 문제3) 1~10까지의 정수값을 배열에 저장하고 홀수의 합과 짝수의 합을 각각 구하시오(단, for~of 구문 사용)
{
    let arr = [];
    let sum = 0;
    let sum2 = 0;
    for(let i = 0; i <= 10; i++){
        arr[i] = i;
        if(i%2 == 0){
            sum += i;
        }else if(i%2 == 1){
            sum2 += i
        }
    }
     console.log(arr);
     console.log(`1~10까지 짝수의 합: ${sum}`);
     console.log(`1~10까지 홀수의 합: ${sum2}`);
}
{
    // solution
    let number = [1,2,3,4,5,6,7,8,9,10]
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for(let ele of number){
        if(ele % 2 == 0){
            sumOfEven += ele;
        }else{
            sumOfOdd += ele;
        }
    }
    console.log(`1~10까지 짝수합 : ${sumOfEven}`);
    console.log(`1~10까지 홀수합 : ${sumOfOdd}`);
}

// 문제4) 두개의 양의 정수값을 매개값으로 입력받아 두 정수사이의 정수값들의 합을 계산하여 반환하는 함수를 구현하시오.
// 1) 함수정의문
{
    function sum(v1, v2){
        let result = 0;
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
    let numSum = sum(1,10);
    console.log(`두 정수 사이의 정수값 합: ${numSum}`);
}
{
    // solution
    function f(v1,v2){
        if(v1 < 1 || v2 < 1){
            // 예외발생 시 함수를 즉시 종료하고 호출한 곳으로 예외객체를 전달한다.
            throw new Error('양의정수가 아닙니다.');
        }
        let sum = 0;
        for(let v = v1; v<=v2; v++){
            sum += v;
        }
        return sum;
    }
    try{
        let result = f(11,12);
        console.log(`result = ${result}`);
    }catch(e){
        console.error(e.message);
    }finally{
        console.log('예외발생 유무와 상관없이 실행되는 절');
    }
}

// 2) 함수표현식
{
    const sum = function(v1, v2){
        let result = 0;
        if(v1>=v2){
          for( let i=v2; i<=v1; i++){
            result += i;
          }
        }else{
            for( let j=v1; j<=v2; j++){
                result += j;
              }
        }
       return result;
    }
    const numSum = sum(3,14);
    console.log(`두 정수 사이의 정수값 합: ${numSum}`);
}
{
    // solution
    const f = function(v1,v2){
        if(v1 < 1 || v2 < 1){
            // 예외발생 시 함수를 즉시 종료하고 호출한 곳으로 예외객체를 전달한다.
            throw new Error('양의정수가 아닙니다.');
        }
        let sum = 0;
        for(let v = v1; v<=v2; v++){
            sum += v;
        }
        return sum;
    }
    try{
        const f2 = f;
        let result = f2(11,12);
        console.log(`result = ${result}`);
    }catch(e){
        console.error(e.message);
    }finally{
        console.log('예외발생 유무와 상관없이 실행되는 절');
    }
}

// 3) 화살표함수 
{
    const sum = (v1, v2) => {
        let result = 0;
        if(v1>=v2){
          for( let i=v2; i<=v1; i++){
            result += i;
          }
        }else{
            for( let j=v1; j<=v2; j++){
                result += j;
              }
        }
       return result;
    }
    
    const numSum = sum(3,14);
    console.log(`두 정수 사이의 정수값 합: ${numSum}`);
}
{
    // solution
    const f = (v1,v2) => {
        if(v1 < 1 || v2 < 1){
            // 예외발생 시 함수를 즉시 종료하고 호출한 곳으로 예외객체를 전달한다.
            throw new Error('양의정수가 아닙니다.');
        }
        let sum = 0;
        for(let v = v1; v<=v2; v++){
            sum += v;
        }
        return sum;
    }
    try{
        const f2 = f;
        let result = f2(11,12);
        console.log(`result = ${result}`);
    }catch(e){
        console.error(e.message);
    }finally{
        console.log('예외발생 유무와 상관없이 실행되는 절');
    }
}


