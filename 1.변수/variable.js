{   //let : 재할당 가능한 변수 선언
    let x;  //선언
    let y;
    x = 10; //할당
    y = 20;

    x = 30; //재할당
    let z = x+y;
    console.log('x+y='+ z);
}
{
    //const : 한번 초기화하면 수정할 수 없는 변수 선언
    const x = 10;
    const y = 10;
    // x = 10; 재할당 불가
    // y = 10; 재할당 불가
    const z = x + y;
    console.log('x+y='+ z);
}
