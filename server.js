const http = require("http")

http.createServer ((request, response) => {
    response.end("<h1>Hello World</h1>\n")
})
.listen (4002);