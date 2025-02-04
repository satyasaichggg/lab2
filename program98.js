const http=require('http')
const fs=require('fs')
const users=require('./users.json')
const server=http.createServer(
    (request,response)=>{
        console.log(request.url)
        if(request.url==='/'){
        response.write('welcome to server')
        response.end();
        }
        else if(request.url==='/about')
        {
            response.write('the page is about page')
            response.end();
        }  else if(request.url==='/users')
            {
                response.write(JSON.stringify(users))
                response.end();
            }
        else{
            response.write('url is undefined')
            response.end();
        }
    })
   
    server.listen(3000)
    console.log("server")