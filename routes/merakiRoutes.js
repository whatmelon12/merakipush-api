module.exports = function(app){
    const controller = require('./../controller/merakiController');
    app.route('/meraki')
        .get(controller.MerakiAuthentication)
        .post(controller.CreateEventData);
};