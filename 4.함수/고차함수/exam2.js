{
    {
      // 배열을 입력받아  2배수한 배열을 반환하는 함수를 구현하시오.
      const arr = [1,2,3];
      function x(arr){
        const array = arr.slice();
        for(let i=0; i<array.length; i++){
          array[i] = array[i] * 2;
        }
        return array;
      }
      console.log(x(arr));
    }
    // 배열을 입력받아  3배수한 배열을 반환하는 함수를 구현하시오.
    {
      const arr = [1,2,3];
      function x(arr){
        const array = arr.slice();
        for(let i=0; i<array.length; i++){
          array[i] = array[i] * 3;
        }
        return array;
      }
      console.log(x(arr));
    }
    {  // 고차함수: 
       // case2) 매개값에 함수를 전달 
      const arr = [1,2,3];
      function x(arr,f){
        const array = arr.slice();
        for(let i=0; i<array.length; i++){
            array[i] = f(array[i]);
        }
        return array;
      }
      const f2 = x => x * 2;
      const f3 = x => x * 3;
      
      console.log(x(arr, f2));
      console.log(x(arr, f3));

      // x(arr,f)
      console.log(x(arr, x => x * 4));
      console.log(x(arr, x => x * 5));
    }
  }