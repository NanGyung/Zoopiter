// Array.prototype.reduce(); 편의성이 높음
{
  // 배열.reduce(콜백함수,초기값);
//  const result = [1,2,3,4,5].reduce(function(acc,curr,currIdx,arr){
//                                     console.log(acc,curr,currIdx,arr);
//                                     return acc + curr; 
//                                   }, 0); 
//   console.log(`최종결과값: ${result}`); //배열요소 1~5까지 합

  //   0 1 0 [ 1, 2, 3, 4, 5 ] -> 초기값 0 / curr(배열요소 순차적으로) / crrIdx(현재 요소(curr)의 위치) / [arr](배열)
  //   1 2 1 [ 1, 2, 3, 4, 5 ] -> 연산결과: 초기값 + arr[0] / ...
  //   3 3 2 [ 1, 2, 3, 4, 5 ] -> 초기값 + arr[0] + arr[1] / ...
  //   6 4 3 [ 1, 2, 3, 4, 5 ]
  //   10 5 4 [ 1, 2, 3, 4, 5 ]
  //   최종결과값: 15 -> return 값 acc + crr

  const result2 = [1,2,3,4,5].reduce((acc,curr) => acc + curr, 0); 
  console.log(`최종결과값: ${result2}`); //배열요소 1~5까지 합
  
}

{
  // Array.prototype.forEach(); -> 반환값: void
  // Array.prototype.map();     -> 반환값: array
  // Array.prototype.filter();  -> 반환값: array
  // Array.prototype.find();    -> 반환값: value(첫번째 요소, 없을경우 undefined)
  // Array.prototype.some();    -> 반환값: boolean
  // Array.prototype.every();   -> 반환값: boolean
  // Array.prototype.sort();    -> 반환값: array

}