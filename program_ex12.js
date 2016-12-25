var args = process.argv[2].split(",");
// console.log(args);
  // console.log(args);

    args = args.map((arg)=> +arg);
    // ここに平均を取るavg関数を作る、作る際には
    // RESTパラメータを利用すること。
    // console.log(args);

    var sum = function(...args){
      return args.reduce( (sum, n) => sum + n );
    };
    var avg = function(...args){
      return sum(...args)/args.length;
    }
    console.log(avg(...args));

    ////////////model answer/////////////
    // var rawArgs = process.argv.slice(2);
    // var args = [];
    //
    // rawArgs.forEach(val => {
    //   let commaSep = val.split(',');
    //   commaSep.forEach(val => {
    //     if(val !== '') args.push(+val);
    //   });
    // });
    //
    // function avg(...args){
    //   return args.reduce((a, b)=>a+b)/args.length;
    // }
    //
    // console.log(avg(...args));
