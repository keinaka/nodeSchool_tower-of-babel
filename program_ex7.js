      // var evenOrOdd = +process.argv[2];
      // var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
      // var sum = +process.argv[3] + evenOrOdd;
      // var obj = {};
      // obj[evenOrOddKey] = evenOrOdd;
      // obj[sum] = sum;
      // console.log(obj);
      // =====above this horison : example=====

      var obj = {};
      // console.log("2:%o,3:%o",process.argv[2],process.argv[3]);
      // console.log((()=>Number(process.argv[2]) + Number(process.argv[3]))());
      obj = {
        [process.argv[2]% 2 === 0 ? "even" : "odd"] :  Number(process.argv[2]),
        [(()=>Number(process.argv[2]) + Number(process.argv[3]))()] : (()=>Number(process.argv[2]) + Number(process.argv[3]))(),
      }
      console.log(obj);
