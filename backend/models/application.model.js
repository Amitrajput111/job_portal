import mongoose from "mongose";

const application = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
     applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
        enum:['pending','accepted','rejected'],
        default:'pending'
    },
,}{timeserise:true});
export const Application = mongoose.model("Application",applicationSchema);