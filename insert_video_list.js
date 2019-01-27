var Request = require("request");
var array = [
				{"title": 'Cute Munda - Sharry Mann (Full Video Song)',"url": 'https://www.youtube.com/watch?v=PDlw1Tn-PVk',"list": 10,"duration": '10 Sec'},
				{"title": 'Laung Laachi Title Song',"url": 'https://www.youtube.com/watch?v=YpkJO_GrCo0',"list": 10,"duration": '5 sec'},
				{"title": '3 Peg Sharry Mann Lyric Video',"url": 'https://www.youtube.com/watch?v=LYnHyygU7xE',"list": 10,"duration": '45 sec'},
			]

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost/video/insert_list.php?list="+JSON.stringify(array),
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});