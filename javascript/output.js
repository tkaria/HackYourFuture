var isBlockign = process.argv[3];
var number = process.argv[2];
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

console.log('Numeber it is '+ number);
if(isBlockign) sleep(1000);
