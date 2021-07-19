
const express = require('express');
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

var faker = require('faker');

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

class User  {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company  {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}


app.get("/", (request, respond) => {
    respond.send("hello from server.js")
})

//get user
app.get("/api/users/new", (req, res) => {
    // console.log(req.params);
    res.json(new User());
})

//get company
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

//get user and company
app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
});


app.listen(8000, ()=> {
    console.log(">>>Server has started on localhost:8000<<<")
})