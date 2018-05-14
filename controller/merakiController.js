const _ = require('lodash');

const {EventData} = require('./../model/event-data');

var MerakiAuthentication = (req, res) => {
    res.send('4f804a2d4e4fed82ab2e51dd846c86058b398ca7');
}

var CreateEventData = (req, res) => {
    var body = req.body;
    console.log(body);
    var event = new EventData(body);
    event.save().then(() => {
        res.send(event);
    }).catch((e) => {
        res.status(400).send(e);
    });
}

module.exports = {
    CreateEventData,
    MerakiAuthentication
};