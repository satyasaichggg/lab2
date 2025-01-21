function add(a,callback){
return callback(a*2);

}

function sub(a,callback){
    return callback(a-3);
    
    }

function mul(a,callback){
        return callback(a+10);
        
        }

add(10,(addres,error)=>{
    if(!error){
     sub(addres,(subres,err)=>{
        if(!err)
        {
            mul(subres,(mulres,er)=>{
               if(!er)
               {
                console.log(mulres);
               }
               else
               {
                console.log("error in multiply");
               }
            })
        }
        else
               {
                console.log("error in sub");
               }
     })
    }
    else
               {
                console.log("error in add");
               }
})