import mongoose from "mongose";
const userSchema  = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    }
    phoneNumber:{
        type: Number,
        required: true,
    },
    role:{
        type: String,
        enum:['student','recuriter'],
        required: true,
    },
    profile:{
        bio: {type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
        profilePhoto:{
            type:String,
            default:""
        }

    }

}{timestampsLtrue});
export const User = mongoose.model('User', userSchema);