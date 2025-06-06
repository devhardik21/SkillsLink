import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        PhoneNumber: {
            type: String,
            required: true
        },
        Image: {
            type: String,
            required: true
        },
        location: {
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            pincode: {
                type: String,
                required: true
            },
        },
        dob: {
            type: String,
            required: true
        },
        refreshtoken: {
            type: String,
            required: false
        },
        role: {
            type : [String],
            enum: ['client', 'worker','verified','popular','People Favourite'],
            required: true
        },

        isAvailable: {
            type: Boolean,
            required: false
        }
    }
    , { timestamps: true }
)

export const User = mongoose.model("User",UserSchema) ;

