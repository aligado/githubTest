var http = require("http");
var url = require("url");

function start(route, handle) {
    http.createServer(function (request, response) {

            var pathName = url.parse(request.url).pathname;
            //console.log( request.url );
            console.log("Request for" + pathName + " received.");
            //console.log("Request received.");
            route(handle, pathName);

            response.writeHead(200, {"Content-Type": "text/plain"});

            /*for (var i in request) {
             response.write(i);
             response.write( ""+request[i] );
             console.log( request[i] );

             }*/

            response.write("alpc32");
            response.end();
        }
    ).listen(8888);
    console.log("Server has started.");
}

exports.start = start;