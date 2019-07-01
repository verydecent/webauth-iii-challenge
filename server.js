const server = require('./api/index');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(` ** Server Live 5000 ** `));