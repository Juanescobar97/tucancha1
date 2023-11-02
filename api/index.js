
const {conn} = require("./src/db");
const server = require("./src/app");

const PORT = 3001;

server.listen(PORT, () => {
    conn.sync({force:true});      //sincronizar la BD 
    console.log(`Server listening on ${PORT}`);
})
