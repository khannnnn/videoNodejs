var Request = require("request");
var title = 'Cute Munda - Sharry Mann (Full Video Song)';
var url = 'https://www.youtube.com/watch?v=PDlw1Tn-PVk';
var list = 3;
var duration = '45Sc';

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost/video/insert.php?video="+JSON.stringify({"title": title,"url": url,"list": list,"duration": duration}),
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});