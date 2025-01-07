

const product = {id: 101, name: "Laptop", price: 1000, category:
    "Electronics"}
let {id,name,...other}=product
const p2={id:id,name:name,discount:10,instock:true}
console.log(p2)