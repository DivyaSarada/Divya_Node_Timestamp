const os=require("os");
var path=require("path");
const fs=require("fs");
const express=require("express");
const app=express();
var filesout
const time=new Date().toLocaleTimeString();
const date=new Date().toLocaleDateString();
fs.writeFile('current date-time.txt', `${time} - ${date}`, 'utf8', (err)=>{
    if(err)
    throw err;
    console.log("File Saved");
    
});

fs.readdir("./",(err,x)=>{
    if(err)
    throw err;
    filesout=x;
    console.log(filesout);

})
var finalHtml
var Htmlhead = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>`

Htmlhead+=`<script src="https://kit.fontawesome.com/1e995eb765.js" crossorigin="anonymous"></script><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">`

var Htmlbody =`</head><body>` 

var scripts =`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>`

var htmlfooter=`</body></html>`
var text=`<i class="fa fa-file-text" aria-hidden="true">`
var result=`<ul class="row">`;
app.get('/',(req,res)=>{
    Htmlbody=`<ul class="row">`
    for(var i=0;i<filesout.length;i++){
        ext=path.extname(filesout[i])
        if(ext==".txt"){
            Htmlbody+=`<div class="col-3 card p-4">`+text+ `&nbsp&nbsp`+filesout[i]+`</i></div>`
        }
               
       
    }
    
    Htmlbody+=`</ul>`
    
    
    
    finalHtml=Htmlhead+Htmlbody+scripts+htmlfooter
    res.send(finalHtml)
})

const port =process.env.PORT||3000;
app.listen(port,()=>{console.log("3000")});