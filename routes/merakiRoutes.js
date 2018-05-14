module.exports = function(app){
    const controller = require('./../controller/merakiController');
    app.Route('meraki')
        .get(controller.MerakiAuthentication)
        .post(controller.CreateEventData);
};