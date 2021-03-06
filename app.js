const express = require('express');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

const app = express();

const body_parser = require('body-parser');

const material_controller = require('./material_controller');

// npm init
// npm install express
// npm install mongoose
// npm install nodemon --save-dev
// npm run start-dev

app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended: true
})); // material/id

app.use((req, res, next) => {
    console.log(req.method, ' ', req.path);
    next();
}); // GET /api/materials

// GET /index.html
// /public/index.html
app.use("/", express.static("public"));

// RESTful API
// CRUD OPERATIONS

//CREATE
app.post("/api/material", material_controller.api_post_material);

//api.domain.com/materials
// READ
app.get("/api/materials", material_controller.api_get_materials);


// UPDATE
//app.patch korvaa vain tietyt kentät
//app.put korvaa koko tiedon
app.put("/api/material/:id", material_controller.api_put_material);



// DELETE
app.delete("/api/material/:id", material_controller.api_delete_material);


const database_uri = "mongodb+srv://server:N4GSeeH6EeYXAEM3@cluster0-pkrto.mongodb.net/materialdb?retryWrites=true&w=majority"

mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log('database connected');
    app.listen(port);
}).catch(err => {
    console.log(err);
});