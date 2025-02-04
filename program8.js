const fs = require('fs');
const path = require('path');

// Directory and file paths
const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'testFile.txt');
const renamedFilePath = path.join(dirPath, 'renamedFile.txt');

// Create a directory
fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        return console.error('Error creating directory:', err);
    }
    console.log('Directory created successfully.');

    // Create and write to a file
    fs.writeFile(filePath, 'Hello, Node.js!', (err) => {
        if (err) {
            return console.error('Error writing file:', err);
        }
        console.log('File created and written successfully.');

        // Read directory contents
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                return console.error('Error reading directory:', err);
            }
            console.log('Directory contents:', files);

            // Rename file
            fs.rename(filePath, renamedFilePath, (err) => {
                if (err) {
                    return console.error('Error renaming file:', err);
                }
                console.log('File renamed successfully.');

                // Delete file
                fs.unlink(renamedFilePath, (err) => {
                    if (err) {
                        return console.error('Error deleting file:', err);
                    }
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});
