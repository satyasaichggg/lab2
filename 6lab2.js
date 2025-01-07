const user = {name: "Afroz", age: 30, city: "Hyderabad", country: "INDIA" }
const {name:name, a,city:city,...other}=user
console.log(name)
console.log(city)
