const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "firstname": {type:String,required:true},
            "lastname": String,
            "college": String,
            "dob": String,
            "course": String,
            "mobile": String,
            "email": String,
            "address": String
    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}