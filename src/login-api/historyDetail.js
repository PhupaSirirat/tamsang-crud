const mongoose = require("mongoose")

const HistoryDetailsSchema = new mongoose.Schema(
    {
    name : String,
    email : String,
    phonenum : String,
    orderTime : Object,
    total : Object,
    item : Object,
    },
    {
    collection : "History",
    }
)

mongoose.model("History",HistoryDetailsSchema)