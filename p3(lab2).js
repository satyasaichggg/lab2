function delay(message, callback) {
    setTimeout(() => {
        console.log(message); 
        if (callback) {
            callback(); 
        }
    }, 2000);
}
delay("Hello, world", () => {
    console.log("Message has been printed.");
});
console.log("this message is delayed for 2s")