var Request = require("request");
var list = 6;

Request.get("http://localhost/video/delete_list.php?list="+list, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});