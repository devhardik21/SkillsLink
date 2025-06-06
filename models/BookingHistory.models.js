import mongoose,{Schema} from "mongoose";

const PastBookingSchema = new Schema(
    {
        ServiceName : {
            type  : Schema.Types.ObjectId,
            ref : "Categories",
            required : true
        },
        bookedBy : {
            type  : Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        TimeDuration : {
            type : Number , 
            required : true 
        } 
        ,
        StartTimePeriod : {
            type : Date, 
            required : true 
        },
        EndTimePeriod : {
            type : Date , 
            required : true   
        }
     

    },{timestamps: true}
) 

const PastBooking = mongoose.model("PastBooking",PastBookingSchema) ;

export default PastBooking ;