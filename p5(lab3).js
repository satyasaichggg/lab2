function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (url.includes("error")) {
            reject("Failed to fetch data. URL contains 'error'.");
        } else {
            resolve("Data fetched successfully.");
        }
    });
}

fetchData("https:api.example.com/data").then((message) => {  console.log(message); }).catch((error) => {
        console.log(error);
    });

fetchData("https:api.example.com error")
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.log(error); 
    });
