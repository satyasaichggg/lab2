const fs = require('fs');

const textToAppend = 'Hello, this is a new line of text.\n';

// Append text to the file (create it if it doesn't exist)
fs.appendFile('./text6.txt', textToAppend, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Text appended successfully.');

    // Read and log the file content
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:\n', data);
    });
});
