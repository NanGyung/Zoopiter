{
    const obj = {
        name : '홍길동',
        age : 30
    }
    console.log(obj);
}
{
    const obj = {};
    obj.name = '홍길동';
    obj.age = 30;
    console.log(obj);
}
{
    const obj = {};
    obj['name'] = '홍길동';
    obj['age'] = 30;
    obj.smile = function(){
        console.log('웃다');
    }   
    console.log(obj);
    obj.smile();    //메소드 호출

    console.log('---------');
    for( let key in obj){
        console.log(key, obj[key]);
        console.log(obj[key]);
        
    }
    console.log('---------');
}

{
    const obj = {}; // {key_1: 1, key_2: 2, key_3: 3, ... key_10: 10}

    for(let i=1; i<=10; i++){
        let key = `key_${i}`;
        obj[key] = i; 
    }
    console.log(obj);
}



// {
//     const arr  = [];
//     arr[0] = 1;
//     arr[1] = 2;
//     arr[2] = 3;
//     console.log(arr);   
// }
// {
//     const arr  = [1,2,3];
//     console.log(arr);   
// }