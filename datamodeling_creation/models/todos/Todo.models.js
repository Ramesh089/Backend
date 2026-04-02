import mongoose from "mongoose"

const todoshema = mongoose.Schema({
content:{
    type:string,
    required:true
},
compelet:{
    type:Boolean,
    default:false
},
creartedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

},
subtodo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"subtodo"
}

},{timestamps:true})

export const tode = mongoose.model("todo",todoshema)