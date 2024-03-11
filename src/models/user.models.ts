import { Timestamp } from "mongodb";
import mongoose, { mongo } from "mongoose";
import { EventDocument } from "./event.models";

export interface UserInput{
    name : string;
    email : string;
    password : string;
    role : string
    events: EventDocument[];
}

export interface UserDocument extends UserInput, mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    events: [{ type: mongoose.Schema.Types.Mixed, ref: 'Event' }]
},{timestamp:true , collection: "users"});

const User= mongoose.model<UserDocument>("User", userSchema);

export default User;