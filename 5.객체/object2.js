// 객체 생성 : 개념정의 후 인스턴스 생성
{
    // 1. 생성자 함수
    function Person(name,age){
        // 속성
        // 인스턴스 데이터 프로퍼티
        this.name = name;
        this.age = age;
    }

    // 행위
    // 인스턴스 메소드 프로퍼티
    Person.prototype.smile = function(){
        console.log('웃다');
    }
    Person.prototype.sleep = function(){
        console.log('자다');
    }

    // 인스턴스 프로퍼티는 인스턴스 생성 후 접근가능
    const p1 = new Person('홍길동1',10);
    const p2 = new Person('홍길동2',20);
    const p3 = new Person('홍길동3',30);

    console.log(p1.name, p1.age);
    p1.smile();
    p1.sleep();
    console.log(p2.name, p2.age);
    p2.smile();
    p2.sleep();
    console.log(p3.name, p3.age);
    p3.smile();
    p3.sleep();

    
    // 정적 데이터 프로퍼티
    Person.national = '한국';
    // 정적 메소드 프로퍼티
    Person.study = function(){
        console.log('공부하다');
    }
    // 정적 프로퍼티는 인스턴스 생성없이 접근가능
    console.log(Person.national);
    Person.study();


}