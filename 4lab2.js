function merge(...other) {
    let ob = {};
    for (let i = 0; i < other.length; i++) {
        ob = { ...ob, ...other[i] }; 
    }
    return ob;
}

const userDetails = { name: "CVR", age: 25 };
const userAddress = { address: "Mangalpally", city: "Hyderabad" };
const userPreferences = { theme: "Engineering Edu", language: "EN", a: "ss" };

console.log(merge(userDetails, userAddress, userPreferences));
