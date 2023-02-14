{
    // 문제1) 정수를 요소로 갖는 배열을 매개값으로 받아 합과 평균을 반환하는 함수를 구현하시오
    // const number1 = v1 => {
    //     let n1 = 0;
    //     let sum = 0;
    //     for(let i = 0; i < v1.length; i++){
    //        n1 = v1[i];
    //        sum += n1;
    //     }
    //     return sum;
    // }

    // function number2(v1,v2){
    //     let result = 0;
    //     result = v2 / v1.length + 1;
        
    //     return result;
    // }   
    // const arr = [1,2,3];
    // const f1 = number1(arr);
    // console.log(`합: ${f1}`);
    // console.log(`평균: ${number2(arr,f1)}`);

    function number(v1){
        let n1 = 0;
        let sum = 0;
        let div = 0;
        const result = [];
        for(let i = 0; i < v1.length; i++){
           n1 = v1[i];
           sum += n1;
           div = sum / v1.length + 1;
        }
        result[0] = '합: ' + sum;
        result[1] = ' 평균: ' + div;
        return result;
    }
    const arr = [3,4,5];
    console.log(`${number(arr)}`);
    
    // 문제2) 구구단 단수를 매개값으로 받아 구구단을 출력하는 함수를 구현하시오
    function mutiple(v1){
        const arr = [];
        let result = 0;
        let mutiply = 0;
        for(let i = 0; i < 9; i++){
          mutiply = v1 * (i+1);
          result = v1 + '*' + (i+1) + '=' + mutiply;
          arr[i] = result;  
        }
        return arr;
    }
    console.log(`구구단: ${mutiple(2)}`);
    console.log(`구구단: ${mutiple(3)}`);

    // 문제3) 아래 해당되는 문자열을 매개값으로 받아 위도(lat)와 경도(lng)를 출력하는 함수를 구현하시오
    // '[{"lat":34.123, "lng":127.123}, {"lat":35.123, "lng":132.345}, {"lat":36.123, "lng":136.456}]'
    // const arr1 = [{lat:34.123, lng:127.123}, {lat:35.123, lng:132.345}, {lat:36.123, lng:136.456}];
    // function find(v1){
    //     let result = [];
    //     for(let i = 0; i < v1.length; i++){
    //      for(let ele of v1){
    //         ele = [v1[i].lat, v1[i].lng];
    //         result[i] = ele; 
    //      }
    // } 
        
    //    return result;
    // }
    // console.log(find(arr1));

    {   //  case1)
        function latLng(json){
            // 1) json포맷 문자열 => js로 변환
            const json2 = JSON.parse(json);
            let result = [];
            // 2) 새로운 배열에 아래 요소 저장
            // 위도 : xxx , 경도 : zzz
            // 위도 : xxx , 경도 : zzz
            // 위도 : xxx , 경도 : zzz
            for(let i = 0; i < json2.length; i++){
               result[i]= [`위도 : ${json2[i].lat}`, `경도 : ${json2[i].lng}`];
            }
            return result;
        }
        
        const json = '[{"lat":34.123, "lng":127.123}, {"lat":35.123, "lng":132.345}, {"lat":36.123, "lng":136.456}]'
        console.log(latLng(json));
    }
    {   //case2)
        function latLng(json){
            // 1) json포맷 문자열 => js로 변환
            const json2 = JSON.parse(json);
            let result = [];
            let a = [];
            let b = [];
            // 2) 
            // 위도 : xxx , 경도 : zzz
            // 위도 : xxx , 경도 : zzz
            // 위도 : xxx , 경도 : zzz
            for(let i = 0; i < json2.length; i++){
               a[i] = json2[i].lat;
               b[i] = json2[i].lng;
            }
            result.push(`위도: ${a}`);
            result.push(`경도: ${b}`);
            return result;
        }
        
        const json = '[{"lat":34.123, "lng":127.123}, {"lat":35.123, "lng":132.345}, {"lat":36.123, "lng":136.456}]'
        console.log(latLng(json));
    }
    
    
}