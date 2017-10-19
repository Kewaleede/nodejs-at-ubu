// const rl = require('readline');
// const sc = rl.createInterface(process.stdin);
// function processLine(line){
//   console.log(`line=${line}`);
// }
// sc.question('line',(line) => {
//   processLine(line)
// });

const rl = require('readline');
const sc = rl.createInterface(process.stdin);

sc.on('line',(line) => {
  if(line == 'done'){
    process.exit();
  }
  console.log(`line = ${line}`);
});

// const sc = require('readline-sync');
// let line;
// do{
//   line = sc.question('number: ');
//   console.log('you entered '+line);
// }while(line != 'done');
