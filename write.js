// const fs=require('fs')
// fs.writeFileSync('./sample.txt',"this is a sample text");
// let data=fs.readFileSync('./sample.txt',"utf-8");
// console.log(data);
// console.log("file ended")

const fs=require('fs')
fs.writeFile('./text.txt',"this is a text file",(err)=>{})
fs.readFile('./text.txt',(err,data)=>{
      if(!err){
        console.log(data.toString());
        fs.writeFile('./text.txt',data,(err)=>{})
      }
      else
      {
        console.log("the file is not found");
      }
})


console.log("file created")
