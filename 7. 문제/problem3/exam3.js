// 주어진 데이터가 아래 같다고 할때 아래문항에 대해 각각 코드로 구현하시오
{
    const members = [
     {
       "id":1,
       "name":"홍길동1",
       "age":10,
       "gender":"남",
       "hobby" : ['수영','등산','골프']
     },
     {
       "id":2,
       "name":"홍길동2",
       "age":20,
       "gender":"여",
       "hobby" : ['독서','수영']
     },
     {
       "id":3,
       "name":"홍길동3",
       "age":30,
       "gender":"남",
       "hobby" : ['영화','축구','게임']
     },
     {
       "id":4,
       "name":"홍길동4",
       "age":40,
       "gender":"여",
       "hobby" : ['수영','등산']
     },
     {
       "id":5,
       "name":"홍길동5",
       "age":50,
       "gender":"여",
       "hobby" : ['음악','영화','골프']
     }
   ];

   // 1. 회원수는?
   let cnt = members.length;
   console.log(`회원수: ${cnt}명`);

   // 2. 여성회원수는?
  
function isWoman(v1){
    let count = 0;     
    for(let i = 0; i < v1.length; i++){
        const gender = v1[i].gender;   
         if(gender == '여') count++;
     }
     return count;
}
const womanCnt = isWoman(members);
console.log(`여성회원 수 : ${womanCnt}명`);

   // 3. 남자회원 나이의 총합과 여자회원 나이의 총합?
function ages(v1,v2){
        const arr = v1.filter(item => item['gender'] == v2);
        let agetotal = 0;
        for(let ele of arr){
            agetotal+=ele.age;
        }
        return agetotal;
}
const womanTotal = ages(members,'여');
const manTotal = ages(members,'남');

console.log(`여성회원 나이 총합: ${womanTotal}`);
console.log(`남성회원 나이 총합: ${manTotal}`);

   // 4. 골프가 취미인 회원의 이름을 나열하시오
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
    
   // 5. 회원의 취미를 모두 나열하시오.
   function hobbys(v1){
       const arr = [];
        for(let i = 0; i < v1.length; i++){
            for(const ele of v1[i].hobby){
               arr[i] = ele;
            }
        }
        return arr;
   }
   console.log(hobbys(members));
 
   // 6. 여성회원중 나이가 가장 많은 회원의 이름은?
function womanAge(v1){
    const arr = v1.filter(item => item['gender'] == "여");
    let maxAge = arr[0].age;
    let maxName = arr[0].name;
    for(const ele of arr){
        if(ele.age > maxAge) {
            maxAge = ele.age;
            maxName = ele.name;
        }
    }
    return maxName;
}
const womanMaxage = womanAge(members);
console.log(`여성회원 연장자 이름: ${womanMaxage} `)
 }