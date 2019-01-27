var Request = require("request");
var id = 29;

Request.get("http://localhost/video/about.php?id="+id, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});