const max = process.argv[2];
    let FizzBuzz = {
      [Symbol.iterator]() {
        // ここに FizzBuzzの計算を書く
        // ヒント：
        var count = 1;
        var getFizzBuzz = function(n){
            return n % 15 == 0 ? "FizzBuzz" : n % 3 == 0 ? "Fizz" : n % 5 == 0 ? "Buzz" : n;
        }

        var iterator = {}; // イテレータ
// iterator.next = function(){
//     var iteratorResult = { value: 42, done: false }; // イテレータリザルト
//     return iteratorResult;
// };
// return iterator;
        iterator.next = function(){
          var iteratorResult = ( count <= max)
          ? {value:getFizzBuzz(count) , done: false}
          : {value:getFizzBuzz(count) , done: true};
          count++;
          return iteratorResult;
        }
        return iterator;
      }
    }

    for (var n of FizzBuzz) {
      console.log(n);
      }

      //////////// model answer////////////////
/*
const max = +process.argv[2];
    let FizzBuzz = {
      [Symbol.iterator]() {
        let num = 1;
        return {
          next() {
            if (num > max) {
              return { done: true };
            }
            let value = num;
            if (value % 15 === 0) {
              value = 'FizzBuzz';
            } else if (value % 3 === 0) {
              value = 'Fizz';
            } else if (value % 5 === 0) {
              value = 'Buzz';
            }
            num++;
            return { done: false, value: value };
          }
        }
      }
    }

    for (var n of FizzBuzz) {
      console.log(n);
    }
*/
