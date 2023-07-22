const fs=require('fs');
const http=require('http');
const url = require('url');



const server=http.createServer((req,res)=>{
  console.log("url object=========>",req.url)
  const pathName=req.url;
  if(pathName==="/"|| pathName==="/overview"){
    res.end(`This is the overview`)
  }else if(pathName==="/product"){
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.write(`<h2>This is the product page</h2>`)
    res.end(`This is the product`)
  }else if(pathName==="/api"){
    fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(error,data)=>{
        const productData=JSON.parse(data);
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.end(data)
        console.log(productData)
    })
  }else{
    res.writeHead(404,{
        'Content-Type':'text/html',
        'my-own-header':'hello world'
    })
    res.write(`<h1>We love javascript</h1>`)
    res.end(`<h1>The page not found</h1>`)
  }
   
})

server.listen(8000,()=>{
    console.log(`Server is running successfully at port 8000`)
})