var coffeMachine = {
  makeCoffe : function(onFinish){
    console.log('making coffe...');
    onFinish();
  },
  Name : 'Tien'
};

console.log(coffeMachine.Name);

var beep = function(){
    console.log('tít tít ...')
};

coffeMachine.makeCoffe(beep);