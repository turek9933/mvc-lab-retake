const http = require('http');

const carsJS = require('./cars');
const htmlJS = require('./htmlGenerator');

const PORT = 3000;

const requestListener = (req, res) => {
    const cars = carsJS.getCars();
    console.log(cars);
    res.setHeader("Content-Type", "text/html");
    res.write(htmlJS.getHTMLDocumentStart());
    res.write('<body>');
    res.write(`<p>${carsJS.getCarInformation(1)}</p>`);
    res.write(`<p>${carsJS.getCarAge(1)}</p>`);
    res.write('</body>');
    res.write(htmlJS.getHTMLDocumentEnd());
    res.end();
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});