const http = require("http");
const fs = require("fs");
const url = require("url");
const { Readable } = require("stream");
const host = "127.0.0.1";
const port = "5008";

const server = http.createServer((req, res) => {
    {
        // if (req.url === "/about") {
        //     res.writeHead(200, "On about page", { "Content-Type": "text/plain" });
        //     res.write("this is about page");
        //     res.end();
        // } else {
        //     res.writeHead(404, "May be you're lost", { "Content-Type": "text/plain" });
        //     res.write("this is NOT FOUND page");
        //     res.end();
        // }
    }
    let linkAddr = req.url.toLocaleLowerCase();
    switch (linkAddr) {
        case "/about":
            {
                res.writeHead(200, "Successfully opened about", { "Content-Type": "text/plain" });
                res.write("this is about page");

                res.end();

            }
            break;

        case "/":
            {
                let body = ""
                req.on("data", (chunk) => {
                    body += chunk;
                })
                console.log(body);
                req.on("end", () => {
                    console.log(body);
                    res.writeHead(200, "Success", { "Content-Type": "text/html" });
                    res.write("Home/Index page");
                    fs.readFile("app/index.html", 'utf8', (err, data) => {
                        if (err) {
                            return console.log(err);
                        }
                        res.end(data);
                    })

                    //res.end();
                })

            }
            break;
        case ("/insert"):
            {
                res.writeHead(200, "insert Success", { "Content-Type": "text/plain" });
                res.write("insert Page");
                res.end();
            }
            break;
        default:
            {
                res.writeHead(404, "May be you're lost", { "Content-Type": "text/plain" });
                res.write("this is NOT FOUND page");
                res.end();
            }
    }





});

server.listen(port, host, () => {
    console.log(`Live at ${host}:${port}`);
})