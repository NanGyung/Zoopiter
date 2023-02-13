const data = `{
    "members":[
      {
        "id":1,
        "name":"홍길동1",
        "age":10,
        "gender":"남",
        "hobby" : ["수영","등산","골프"]
      },
      {
        "id":2,
        "name":"홍길동2",
        "age":20,
        "gender":"여",
        "hobby" : ["독서","수영"]
      },
      {
        "id":3,
        "name":"홍길동3",
        "age":30,
        "gender":"남",
        "hobby" : ["영화","축구","게임"]
      },
      {
        "id":4,
        "name":"홍길동4",
        "age":40,
        "gender":"여",
        "hobby" : ["수영","등산"]
      },
      {
        "id":5,
        "name":"홍길동5",
        "age":50,
        "gender":"여",
        "hobby" : ["음악","영화","골프"]
      }
    ]
  }`;

// 공공API를 통해 위의 JSON포멧의 문자열을 받았다고 가정하고 아래문항에 대해 각각 코드로 구현하시오
const arr = JSON.parse(data);
// console.log(arr['members'][0]['hobby'][1]);

// 1. 회원수는?
{
    let cnt = arr['members'].length;
    console.log(`회원수: ${cnt}명`);
}
// 2. 여성회원수는?
{
    function womanCnt(v1){
        let count = 0;
        for(let i = 0; i < v1['members'].length; i++){
            const gender = v1['members'][i]['gender'];
            if(gender == '여') count++;
        }
        return count;
    }
    const cnt = womanCnt(arr);
    console.log(`여성회원수: ${cnt}명`);
}
// 3. 남자회원 나이의 총합과 여자회원 나이의 총합?
{
    function ages(v1, v2){
        const arr = v1['members'].filter(item => item['gender'] == v2);
        let agetotal = 0;
        for(let obj of arr){
            agetotal += obj['age'];
        }
        return agetotal;
    }

    const woman = ages(arr,'여');
    const man = ages(arr,'남');

    console.log(`여성회원 나이 총합: ${woman}`);
    console.log(`남성회원 나이 총합: ${man}`);

}
// 4. 골프가 취미인 회원의 이름을 나열하시오
{
    function hobbyName(v1){
        const arr = v1.filter(item => item['hobby'] == '골프 ');
        const result =  [];
        for(let i = 0; i < v1.length; i++){
            for(const ele of v1[i].hobby){
                if(ele == '골프'){
                    result[i] = v1[i].name;
                }
            }
        }
        return result;
    }
        const names = hobbyName(members);
        console.log(names);
}
// 5. 회원의 취미를 모두 나열하시오.
{

}
// 6. 여성회원중 나이가 가장 많은 회원의 이름은?
{

}