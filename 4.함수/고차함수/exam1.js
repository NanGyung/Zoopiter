
{
    // 정수를 입력받아 2배수를 반환하는 함수를 구현하시오
    function multiply2(v1){
        return v1 * 2; 
    }
    console.log(multiply2(2));
    // 정수를 입력받아 3배수를 반환하는 함수를 구현하시오
    function multiply3(v1){
        return v1 * 3; 
    }
    console.log(multiply3(2));
    
}
{   // 고차함수
    // case1) 함수를 반환하는 함수
    function multiply(v1){
        return function (v2){
            return v2 * v1;
        }
    }

    const f = multiply(2);
    // const f = function (v2){
    //     return v2 * 2;
    // }

    console.log(f(3));
    console.log(multiply(2)(3));

    const result = multiply(5)(10);
    console.log(result);

    const multiply = v1 => v2 => v2 * v1;
    console.log(multiply(2)(3));

    const x2 = multiply2(2);    //2배수 함수
    const x3 = multiply2(3);    //3배수 함수
    const x4 = multiply2(4);    //4배수 함수

    console.log(x2(10));
    console.log(x3(10));
    console.log(x4(10));

}

