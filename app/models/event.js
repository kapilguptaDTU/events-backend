const mongoose = require('mongoose'),
      Venue  = require('./venue'),
      Client = require('./client');


const eventSchema = new mongoose.Schema({
    state: {
        type: String,
        // draftEvent: {
        //     type: Boolean                    //this string should alwaysbe one of the four states - ask nigam bhaiya
        //     //defalut value  true
        // } ,
        // minReached: false,
        // ongoingEvent: false,
        // pastEvent: false,
        // cancelledEvent: false,
        // // type: Boolean
        default: "draftEvent"
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Client
    },
    name: {
        type: String,
        required: true
    },  
    desc: {
        type: String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Venue,
        required: true
    },
    time: {
        timeSlot: {
            startTime: String,
            endTime: String
        },
        date: {
            type: Date
        }
        //required: true   //i want it to be true but it gives error
    },
    ticketMRP: {
        type: Number,
        required: true
    },
    minParticipation: {
        type: Number,
        required: true
    },
    maxParticipation: {
        type: Number,
        required: true
    },
    amenities: [
        String
    ],
    type: {
        type: String,
        required: true
    },
    additonalNote: {
        type: String
    }
});


module.exports = mongoose.model("Event",eventSchema);




