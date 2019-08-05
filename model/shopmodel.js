const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let shopSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    date:{
        default: Date.now,
        type: Date,
    }
}
)
module.exports  = mongoose.model("Shop", shopSchema);