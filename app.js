const http = require('http');
const routes = require('./routes/index');
const PORT = 3000;

const requestListener = (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        routes.handleHome(req, res);
    }
    else if (req.url === '/add-car') {
        console.log(req.method);
        console.log(req.url);
        console.log("!!!!!!!!!!!!!");
        routes.handleAddCar(req.method, req, res);
    }
    else if (req.url === '/car' && req.method === 'GET') {
        routes.handleCar(req, res);
    }
    else {
        routes.handlePageNotFound(req, res);
    }
}

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
