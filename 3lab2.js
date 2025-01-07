function update(emp,rol){
  return {
    ...emp,
    role:rol
  };
}
const employee = {name: "ABHI", role: "Developer", age: 28, location: "IN"}

console.log(update(employee,"Senior Developer"))