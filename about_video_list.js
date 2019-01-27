var Request = require("request");
var list = 6;

Request.get("http://localhost/video/about_list.php?list="+list, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});