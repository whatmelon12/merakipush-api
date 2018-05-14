const {mongoose} = require('./../db/mongoose');

var EventDataSchema = new mongoose.Schema(
    {
        version: String,
        secret: String,
        type: String,
        data:{
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
    }
);

var EventData = mongoose.model('MerakiEvents', EventDataSchema);

module.exports = {EventData};