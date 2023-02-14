// 객체 생성 : 개념정의 없이 직접 인스턴스 생성
{
    const Person = {
        "national" : '한국',
        "name" : "홍길동",
        "age" : 30,
        
        smile(){
            console.log('웃다');
        },
        
        sleep(){
            console.log('자다');
        },
        study(){
            console.log('공부하다');
        }
    }

    Person.smile();
    Person.sleep();
    Person.study();

    console.log(Person.national);
    console.log(Person.name);
    console.log(Person.age);

    console.log(Person['national']);
    console.log(Person['name']);
    console.log(Person['age']);
}