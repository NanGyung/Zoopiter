
{
    // 문제1) 두 수를 입력받아 덧셈하여 반환하는 함수를 구현하시오
    let result = 0;
    const sum = (v1,v2) => {
        result = v1 + v2;
        return result;
    }
    console.log(sum(1,2));
}
{
    // 1)solution
    function sum(v1,v2){
        let result = '';
        result = v1 + v2;
        return result;
    }

    const result = sum(10,20);
    console.log(result);
}
{
      // 1)solution
      function sum(v1,v2){
        return v1 + v2;
    }

    const result = sum(10,20);
    console.log(result);
}
{
      // 1)solution
    const sum = (v1,v2) => v1 + v2;

    const result = sum(10,20);
    console.log(result);
}

{    
    //  문제2) 요소 1,2,3을 갖는 배열이 주어졌을 때 2배수한 결과를 반환하는 함수를 구현하시오
    const arr = [1,2,3];
    function cal(x){
        const arr2 = [];
        for(let i = 0; i < x.length; i++){
            arr2[i] = x[i] * 2;
        }
        return arr2;
    }
    console.log(cal(arr));
}
{
    //2) solution
    function double(arr){
        for(let i = 0; i<arr.length; i++){
            arr[i] *= 2;
        }
        return arr;
    }
    const arr = [1,2,3];
    const result = double(arr);
    console.log(result);
}

// {    //내장 메소드 map()
//     const arr = [1,2,3];
//     const result = arr.map(v1 => v1 * 2);
//     console.log(result);
// }

{
    // 문제3) 정수를 입력받아 홀수인지 판단하는 함수를 구현하시오 (홀수면 true를 반환하고 짝수면 false를 반환)
    const cal = v1 => {
        if(v1 < 0) throw new Error('정수가 아닌 수');
        if(v1%2 == 0){
            return 'false';
        }else{
            return 'true';
        }
    }
    console.log(cal(4));
    console.log(cal(3));
}

{
    // 문제4) 입력받는 매개값의 객체 프로퍼티 구조가 아래와 같을 경우 성별을 판단하여 반환하는 함수를 구현하시오
    //  남자면 '남자'를 반환, 여자면 '여자'를 반환하기로 한다.
    //  {name: '홍길동', age: 30, gender: '남|여'}
    const person = {name: '홍길동', age: 30, gender: '여'}
    const people = v1 => {
        if(v1.gender == '남'){
            return '남자';
        }else{
            return '여자';
        }
    }
    console.log(`성별: ${people(person)}`);
}
{
    // 4) solution 
    // case1)
    function gender(obj){
        let result = '';
        
        if(obj['gender']  == '남'){
            result = '남자';
        }else if(obj['gender'] == '여'){
            result = '여자';
        }else{
            throw new Error('남|여 가 아닌 다른 값');
        }
        return result;
    }
    
    const p1 = {name: '홍길동', age: 30, gender: '여'}
    const p2 = {name: '홍길동', age: 30, gender: '남'}
    const p3 = {name: '홍길동', age: 30, gender: '남자'}

    console.log(gender(p1));
    console.log(gender(p2));
    // console.log(gender(p3));
}
{
    // 4) solution 
    // case2)
    
    function gender(obj){
        let result = '';
        
        switch(obj['gender']){
            case '남' : 
                result = '남자';
                break;
            case '여' :
                result = '여자';
                break;
            default : 
             throw new Error('남|여 가 아닌 다른 값');
        }
        return result;
    }
    
    const p1 = {name: '홍길동', age: 30, gender: '여'}
    const p2 = {name: '홍길동', age: 30, gender: '남'}
    const p3 = {name: '홍길동', age: 30, gender: '남자'}

    console.log(gender(p1));
    console.log(gender(p2));
    // console.log(gender(p3));
}

{
    //문제 5) 아래 주어진 배열을 매개값으로 입력받아 가장 큰 수를 반환하는 함수를 구현하시오
    //        배열 = [5,2,7,1]
    const arr = [5,2,7,1];
    const maxNum = v1 => {
        const max = Math.max(...v1);
        return max;
    }
    console.log(`최댓값 : ${maxNum(arr)}`);
}
{
    // 5) solution
    function max(arr){
        let maxValue = arr[0];

        for(let ele of arr){
            if(ele > maxValue){
                maxValue = ele;
            }
        }
        return maxValue;
    }

    const arr = [5,2,7,1];
    const result = max(arr);
    console.log(`최대값 : ${result}`);
}

{
    // 문제 6) 문제2에서 원본배열을 유지하고 2배수한 결과를 새로운 배열로 반환하는 함수를 구현하시오
    // 복사, push
    const arr = [1,2,3];
    function cal(x){
        const arr2 = [];
        for(let i = 0; i < x.length; i++){
            arr2[i] = x[i] * 2;
        }
        return arr2;
    }
    const arr3 = cal(arr);
    const result = arr.concat(arr3);
    console.log(result);
}
{
    // 6) solution
    {   // case1)
        function double(array){
            const arr = array.slice();  //원본 배열 복사
            for(let i = 0; i<arr.length; i++){
                arr[i] *= 2;    //arr[i] = arr[i] * 2;
            }
            return arr;
        }
        const arr = [1,2,3];
        const result = double(arr);
        console.log(arr,result);
    }
    {   // case2)
        function double(arr){
            const array = [];   //새로운 배열 생성
            for(let ele of arr){
                array.push (ele*2);
            }
            return array;
        }
        const arr = [1,2,3];
        const result = double(arr);
        console.log(arr,result);
    }
}

