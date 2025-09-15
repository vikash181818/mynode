import http, { request } from "http";

const server = http.createServer((req, res) => {
//     console.log(req.url);
    
// res.end('Hello from Routing Lecture\n');

if(req === '/wdm'){
    console.log('Welcome to Web Development Mastery');
    res.end('Welcome to Web Development Mastery\n');
}else if(req.url === '/srk'){
    console.log('Welcome to Node.js Mastery');
    res.end('Welcome to Node.js Mastery\n');
}else{
    console.log('Welcome to our Home  Page');
    res.end('Welcome to our Home Page\n');
}});
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})