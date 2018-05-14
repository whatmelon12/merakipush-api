const {mongoose} = require('./../db/mongoose');

var DataEventSchema = new mongoose.Schema(
    {
        apMac: String,
        apTags:  [String],
        apFloors: [String],
        observations: [{
            "clientMac": String,
            "ipv4": String,
            "ipv6": String,
            "seenTime": String,
            "seenEpoch": String,
            "ssid": String,
            "rssi": Number,
            "manufacturer": String,
            "os": String,
            "location":{
                "lat": Number,
                "lng":Number,
                "unc":Number,
                "x": [Number],
                "y": [Number]
            }
        }]         
    }
);

var DataEvent = new mongoose.Model('data-event', DataEventSchema);

module.exports = {DataEvent};