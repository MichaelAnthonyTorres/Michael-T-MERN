const Person = require('../models/person.model'); 

const index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

const createPerson = (req, res) => {
    const { firstName, lastName } = req.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

module.exports = {
    index,
    createPerson
}