const fs = require("fs")

fs.readFile("welcome.txt", (err, data) => {
    if (err) {
        console.error(err);
    } 
    console.log(data.toString());

})