import express from 'express';
import { Worker,workerData } from 'worker_threads';


const app=express();

app.listen(3003,()=>{
    console.log("Express is listening in PORT 3003");
});

app.get('/hello',(req,res)=>{
    res.send('<h1>Hello</h1>')
});

app.get('/heavy',(req,res)=>{
    let i;
    let sum=0;
    for(i=0;i<10000000;i++){
        console.log(i);
        sum+=i;
    }
    res.send(`<h1>Hello sum is ${sum}</h1>`)
});


app.get('/light',(req,res)=>{
    let i;
    let sum=0;
    for(i=0;i<10;i++){
        sum+=i;
    }
    res.send(`<h1>Hello sum is ${sum}</h1>`)
});

app.get('/heavy-worker',(req,res)=>{
    const worker=new Worker('./worker.js');
    worker.on('message',(data)=>{
        res.send(`<h1>Hello sum from worker is ${data}</h1>`)
    });

    worker.on('error',(data)=>{
        res.send(`<h1>Error</h1>`)
    });
    
    
});