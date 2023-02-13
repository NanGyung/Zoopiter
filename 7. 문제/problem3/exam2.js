
{
    // 문제1) 두 수를 입력받아 덧셈하여 반환하는 함수를 구현하시오
   const sum = (v1,v2) => v1+v2;
   console.log(sum(1,2)); 
}


{    
    //  문제2) 요소 1,2,3을 갖는 배열이 주어졌을 때 2배수한 결과를 반환하는 함수를 구현하시오
    const array = [1,2,3];
    function double(arr){
        const array2 = [];
        for(let i = 0; i<arr.length; i++){
            array2[i] = arr[i] * 2;
        }
        return array2;
    }
    console.log(double(array));
}
{
    const array = [1,2,3];
    const double = arr => {
        for(let i = 0; i< arr.length; i++){
            arr[i] *= 2;
        }
        return arr;
    }
    console.log(double(array));
}

{
    // 문제3) 정수를 입력받아 홀수인지 판단하는 함수를 구현하시오 (홀수면 true를 반환하고 짝수면 false를 반환)
   const cal = num => {
     if(num%2 == 0){
        return false;
     }else{
        return true;
     }
   }
   console.log(cal(1));
   console.log(cal(2));
}

{
    // 문제4) 입력받는 매개값의 객체 프로퍼티 구조가 아래와 같을 경우 성별을 판단하여 반환하는 함수를 구현하시오
    //  남자면 '남자'를 반환, 여자면 '여자'를 반환하기로 한다.
    //  {name: '홍길동', age: 30, gender: '남|여'}
   const p1 = {name: '홍길동', age: 30, gender: '남'}
   const p2 = {name: '홍길동', age: 30, gender: '여'}
   const gender = (person) => {
    if(person.gender == '남'){
        return '남자';
    }else if(person.gender == '여'){
        return '여자';
    }
   }
   console.log(gender(p1));
   console.log(gender(p2));
}
{
    const p1 = {name: '홍길동', age: 30, gender: '남'}
    const p2 = {name: '홍길동', age: 30, gender: '여'}
    const p3 = {name: '홍길동', age: 30, gender: '여자'}
    const gender = (person) => {
     switch(person[`gender`]){
        case '남' :
            return '남자';
            break;
        case '여' : 
            return '여자';
            break;
        default: 
            throw new Error('남 | 여 어느것도 아님');
     }
    }
    console.log(gender(p1));
    console.log(gender(p2));
    // console.log(gender(p3));
}

{
    //문제 5) 아래 주어진 배열을 매개값으로 입력받아 가장 큰 수를 반환하는 함수를 구현하시오
    //        배열 = [5,2,7,1]
    const array = [5,2,7,1];
    const maxNum = (arr) => {
        let maxValue = arr[0];
        for(let ele of arr){
            if(ele > maxValue){
                maxValue = ele;
            }
        }
        return maxValue;
    }
    console.log(`최대값 : ${maxNum(array)}`);
}
// {
//     const array = [5,2,7,1];
//     const maxNum = Math.max(...array);
//     console.log(`최대값 : ${maxNum}`);
// }

{
    // 문제 6) 문제2에서 원본배열을 유지하고 2배수한 결과를 새로운 배열로 반환하는 함수를 구현하시오
    // slice(), push()
    const array = [1,2,3];
    function double(arr){
        const array2 = array.slice();
        for(let ele in arr){
            array2[ele] = arr[ele] * 2;
        }
        return array2;
    }
    const result = double(array);
    console.log(array,result);
}
{
    const array = [1,2,3];
    function double(arr){
        const array2 = [];
        for(let ele of arr){
            array2.push(ele * 2);
        }
        return array2;
    }
    const result = double(array);
    console.log(array,result);
}


