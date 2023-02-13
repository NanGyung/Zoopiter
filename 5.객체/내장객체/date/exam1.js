// Date : 1970.01.01 자정(UTC) 부터 초를 누적하여 관리
{
    console.log(Date());    //Wed Feb 08 2023 11:07:54 GMT+0900 (대한민국 표준시)
    const today = new Date();
    console.log(today);                         //2023-02-08T02:09:56.592Z
    console.log(today.getDate());               //8 [일]
    console.log(today.getFullYear());           //2023 [년도]
    console.log(today.getMonth());              //1 [월] : 0->1월, 1->2월, 2->3월...11->12월
    console.log(today.getDay());                //3 [요일] : 0->일, 1->월, 2->화... 6->토
    console.log(today.getHours());              //11 [시간] 
    console.log(today.getMinutes());            //12 [분]
    console.log(today.getSeconds());            //21 [초]
    console.log(today.getMilliseconds());       //109 [1/1000초]
    console.log(today.toLocaleString());        //2023. 2. 8. 오전 11:12:21 
    console.log(today.toLocaleDateString());    //2023. 2. 8.
    console.log(today.toLocaleTimeString());    //오전 11:12:21
    console.log(Date.now());                    //1675822977795 1970년 1월 1일 00:00:00 UTC로부터 지난 시간을 밀리초 단위의 숫자 값으로 반환
}
{
    const today = new Date();
    console.log(today);
    today.setFullYear(today.getFullYear()+1);
    today.setMonth(today.getMonth()+1);
    console.log(`다음달의 오늘날짜 : ${today}`);
    console.log(today.toLocaleDateString());
}
{
    // 오늘 날짜로 부터 35일 후의 요일은?
    const today = new Date();
    console.log(today.toLocaleDateString());   //현재 날짜: 2023. 2. 8.
    const future = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 35);
    console.log(future.toLocaleDateString());   //미래 날짜: 2023. 3. 15.
    switch(future.getDay()){    //미래날짜 요일
        case 0 :
            console.log('일');
            break;
        case 1 :
            console.log('월');
            break;
        case 2 :
            console.log('화');
            break;
        case 3 :
            console.log('수');
            break;
        case 4 :
            console.log('목');
            break;
        case 5 :
            console.log('금');
            break;
        case 6 :
            console.log('토');
            break;
    }
}