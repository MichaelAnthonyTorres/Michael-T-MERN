const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const createUser = () => {
    const User = {
        _id : faker.datatype.uuid(),
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        phone : faker.phone.phoneNumber(),
        email : faker.internet.email(),
        password : faker.internet.password()
    };
    return User
}

const createCompany = () =>{
    const Company ={
        _id : faker.datatype.uuid(),
        name : faker.company.companyName(),
        address : faker.address.streetAddress(),
        street : faker.address.streetName(),
        city : faker.address.city(),
        state : faker.address.state(),
        zipCode : faker.address.zipCode(),
        country : faker.address.country(),
    };
    return Company
}

app.get("/api", (req, res) => {
    res.json({ message: "Wow" });
});

app.get("/api/user/new", (req,res) =>{
    const newUser = createUser();
    console.log(newUser);
    res.json(newUser)
})

app.get("/api/company/new", (req,res) =>{
    const newCompany = createCompany();
    console.log(newCompany);
    res.json(newCompany)
})

app.get("/api/user/company", (req,res) =>{
    const newUser = createUser();
    const newCompany = createCompany();
    console.log(newCompany);
    console.log(newUser);
    res.json({user: newUser, company: newCompany})
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );