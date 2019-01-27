var Request = require("request");
var id = 29;

Request.get("http://localhost/video/delete.php?id="+id, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});