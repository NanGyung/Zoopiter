const arr = [10, 'name', "age", ['hobby',30,{"name":"홍길동","age":30}],
function(x,y){return x+y}];

const arr2 = [];
const arr3 = [[],[]];
{
    for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

const f = arr[arr.length-1];
const result = f(10,20);
console.log(`result = ${result}`);

}

{
    for(let ele of arr){
    console.log(ele);
    }
}

{
    arr2[0] = '홍길동';
    arr2[1] = '홍길순';

    console.log(arr2[0]);
    console.log(arr2[1]);

    for(let ele of arr2){
        console.log(ele);
    }
}
{
    // arr3[['00','01'],['10','11']]
    arr3[0][0] = '00';
    arr3[0][1] = '01';
    arr3[1][0] = '10';
    arr3[1][1] = '11';

    // arr3[['00','01'],['10','11'],100]
    arr3[2] = 100;

    // arr3[['00','01'],['10','11'],100,{"name":"홍길동","age":30}]
    arr3[3] = {"name":"홍길동","age":30};
    console.log(arr3[3].name,arr3[3].age);
    console.log(arr3);
}