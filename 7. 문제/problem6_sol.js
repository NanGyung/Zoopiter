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
const result = JSON.parse(data);

// 1. 회원수는?
{
    console.log(`회원수: ${result.members.length}`);
}
// 2. 여성회원수는?
{
  { //case1)
    let count = 0;
    for(let i = 0; i < result.members.length; i++){
      if(result.members[i].gender == '여') {
        count++
      }
    }
    console.log(`여자회원 수 = ${count}`);
  }
  { //case2)
    console.log(`여자회원 수 = ${result.members.filter(ele => ele.gender == '여').length}`);
  }
}
// 3. 남자회원 나이의 총합과 여자회원 나이의 총합?
{
  { //case1) 반복문
    let ageOfwomen = 0;
    let ageOfmen = 0;
    for(let i = 0; i < result.members.length; i++){
      if(result.members[i].gender == '여') {
        ageOfwomen += result.members[i].age;
      }else if(result.members[i].gender == '남'){
        ageOfmen += result.members[i].age;
      }

    }
    console.log(`여자회원 나이 총합 = ${ageOfwomen}`);
    console.log(`남자회원 나이 총합 = ${ageOfmen}`);
  }
  { //case2) 고차함수
    const ageOfWomen = result.members.filter(ele => ele.gender == '여')
                                     .reduce((acc,ele) => acc + ele.age, 0);
    const ageOfmen = result.members.filter(ele => ele.gender == '남')
                                     .reduce((acc,ele) => acc + ele.age, 0);

    console.log(`여자회원 나이 총합 = ${ageOfWomen}`);
    console.log(`남자회원 나이 총합 = ${ageOfmen}`);
  }
}
// 4. 골프가 취미인 회원의 이름을 나열하시오
{
    { //case1)
        for(let i = 0; i < result.members.length; i++){
        if(result.members[i].hobby.includes('골프')){
          console.log(result.members[i].name);
        }
      }
    }
    { //case2)
      result.members.forEach(ele => {
        if(ele.hobby.includes('골프')){
          console.log(ele.name);
        }
      });
    }
}
// 5. 회원의 취미를 모두 나열하시오.
{
  { //case1) map, set, flat
    const hobbys = result.members.map(member => member.hobby);
    console.log(hobbys);
    console.log(hobbys.flat());
    console.log(new Set(hobbys.flat()));
  }
  
  { //case2)mep, set, flat, forEach
    const hobbys2 = new Set(result.members.map(member => member.hobby).flat());
    hobbys2.forEach(ele => console.log(ele));
    hobbys2.forEach(console.log);
  }

  { //case3)mep, reduce, forEach, set
    const hobbys3 =  result.members.map(m => m.hobby)
                                .reduce((acc, hobby) => acc.concat(hobby),[]);
    (new Set(hobbys3)).forEach(hobby => console.log(hobby));
  }
}

// 6. 여성회원중 나이가 가장 많은 회원의 이름은?
{
  { //case1)
    // 1)여성회원 추출
    const women = [];
    for(let i = 0; i < result.members.length; i++){
      if(result.members[i].gender == '여'){
        women.push(result.members[i]);
      }
    }
    // 2)여성회원 중 나이가 가장 많은 회원의 이름
      let maxAgeOfWomen = women[0].age;
      let idxOfMaxAgeOfWomen = 0;
      for(let i = 0; i < women.length; i++){
        if(women[i].age > maxAgeOfWomen){
          maxAgeOfWomen = women[i].age;
          idxOfMaxAgeOfWomen = i;
        }
      }

      console.log(`이름 = ${women[idxOfMaxAgeOfWomen].name}`);
    }

    { //case2) 고차함수 filter, sort
      console.log(result.members.filter( m => m.gender == '여' )
                                .sort((m1,m2) => (m2.age - m1.age))[0].name
      );
    }
  }


// 7. 모든 회원이 여성회원들로만 이뤄져있는지 판단하시오
{
  const isWomen = result.members.every(member => member.gender == '여');
  if(isWomen){
    console.log('모든 회원이 여성이다');
  }else{
    console.log('남성회원이 존재한다');
  }
}
{ // 중괄호 있으면 return문이 들어가야함
  const existWomen = result.members.some(member => {return member.gender == '여'}); 
  if(existWomen){
    console.log('여성회원이 있습니다');
  }else{
    console.log('여성회원은 없습니다');
  }
}