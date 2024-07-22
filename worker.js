import { parentPort } from "worker_threads";

let i;
let sum=0;
for(i=0;i<10000000000;i++){
    sum+=i;
}
console.log('hi from worker');
parentPort.postMessage(sum)