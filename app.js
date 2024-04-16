/*
Nie mam w informacji zwrotnej do zadania z labolatorium nr 1 oceny, co według posta 'Laboratorium - 1', oznacza ocenę 2.
Według komentarza w zespole do tego zadania powinienem mieć ocenę 3 (2.75pkt / 6pkt).

Sądzę, że nowszy komentarz jest ważniejszy, ale dla pewności wysyłam poprawę i tego laboratorium.
*/

const carsJS = require('./cars');
const htmlJS = require('./htmlGenerator');

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