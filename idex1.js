var obj={
    name:"sai",
    age:19,
    greet :function() {
       console.log(`hello :${this.name}`); },
    isAdult : function(){
         if(this.age>18)
            console.log("adult");
        else console.log("not adult");
       }
    }

obj.greet()
obj.isAdult()