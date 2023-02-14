{
    // 함수 선언문
    function sum(v1,v2){
        return v1 + v2;
    }

    const result = sum(10,20);
    console.log("result = "+result);
    console.log(`result = ${result}`); // 권장표현방법
    
}

{
    // 함수표현식
    const sum = function (v1, v2){
        return v1 + v2;
    }
    
    const result = sum(10,20);
    console.log("result = "+result);
    console.log(`result = ${result}`); 
}

{
    // 화살표 함수
    // case1
    const sum = (v1, v2) =>{
        return v1 + v2;
    }

    const sum2 = (v1, v2) => v1 + v2;
    
    
    const result = sum(10,20);
    const result2 = sum2(10,20);
    console.log("result = "+result);
    console.log(`result2 = ${result2}`); 
}