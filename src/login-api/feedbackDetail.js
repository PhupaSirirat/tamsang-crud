const mongoose = require("mongoose")

const FeedbackDetailsSchema = new mongoose.Schema(
    {
    name : String,
    email : String,
    feedback : String,
    showTime : String,
    },
    {
    collection : "Feedback",
    }
)

mongoose.model("Feedback",FeedbackDetailsSchema)