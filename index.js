
function receivesAFunction (cb) {
    cb();
  }
  
  

  function returnsANamedFunction(){
      return function notImportant(){

      }
  }

  function returnsAnAnonymousFunction(){
      return function (){
          
      }
  }