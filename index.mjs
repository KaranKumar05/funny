import express from 'express';
import path from 'path';

const server = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () =>{
    console.log(`Listining on Port: ${PORT}`);
})
