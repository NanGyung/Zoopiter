{
    // String.prototype.at()

    const str = '울산KH정보교육원';
    console.log(str.at(0));
    console.log(str.at(-1));
    
}
{
    // endsWith(searchString[, length]): return boolean
    const str = '울산KH정보교육원';
    console.log(str.endsWith('원'));    //'원'으로 끝나는 문자열이면 true
    console.log(str.endsWith('언'));
}
{   
    // includes(searchString[, length]): return boolean
    const str = '울산KH정보교육원';
    console.log(str.includes('KH'));
    console.log(str.includes('KH', 4));
}
// match/test : e-mail, password ...
{
    // match : 주어진 문자열에서 정규표현식과 일치하는 문자열을 배열로 반환
    const str = '010-1234-5678';
    var re = /^010-\d{4}-\d{4}$/;
    // const re = new RegExp('010-\\d{4}-\\d{4}');
    console.log(str.match(re));
}
{
    // RegExp.property.test : 주어진 문자열에서 정규표현식과 일치하면 true, 불일치하면 false
    const str = '010-1234-5678';
    var re = /^010-\d{4}-\d{4}$/;
    // const re = new RegExp('010-\\d{4}-\\d{4}');
    console.log(re.test(str));
}
{
    // replace : 찾은 첫번째 문자열 치환
    const str = '울산KH정보교육원';
    const result = str.replace('정보교육원','직업학교');
    console.log(result);
}
{
    // replaceAll : 찾은 모든 문자열 치환
    const str = '울산KH정보교육원_정보교육원';
    const result = str.replaceAll('정보교육원','직업학교');
    console.log(result);
}
{
    // search : 찾는 문자열의 위치를 반환, 존재하지 않으면 -1
    const str = '울산KH정보교육원';
    console.log(str.search('울산'));    //0
    console.log(str.search('KH'));      //2
    console.log(str.search('서울'));    //-1
}
{
    // slice : *주의-endindex는 미포함
    const str = '울산KH정보교육원';
    console.log(str.slice(2,4));
}
{
    // split : 구분자를 분리하여 배열에 담아 반환
    const phone = '052-1234-567';
    const result = phone.split('-');
    console.log(result);
    if(result[0] == '052'){
        console.log('울산');
    }else{  
        console.log('울산이외 지역');
    }
    console.log(result.join(''));           //0521234567
    console.log(phone.replaceAll('-',''));  //0521234567
}
{
    // subString : 인덱스로 문자열 추출
    const str = '울산KH정보교육원';
    console.log(str.substring(2));      //KH정보교육원
    console.log(str.substring(2,4));    //KH
    console.log(str.substring(-2));     //음수 불가
    console.log(str.slice(-2));         //육원
}