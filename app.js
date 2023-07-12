const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

app.use(express.static(path.join(__dirname, "./public")));

const rutasMain = require("./routes/main");

app.use("/", rutasMain)

app.use("/about", rutasMain)