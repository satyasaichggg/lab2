function Student(name,grade){
     this.name=name;
     this.grade=grade;
     this.study=function(){
           console.log(`hello ${this.name}`);
     },
     this.Grade=function(){
       return this.grade;
  }
    }
let s1=new Student("satya","A")
s1.study()
console.log(s1.Grade())
let s2=new Student("sai","B")
s2.study()
console.log(s2.Grade())