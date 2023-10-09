import mongoose from "mongoose";

const mealsSchema = mongoose.Schema({
    mealsImage: {
        type: String,
        required: true,
    },
    mealsName: {
        type: String,
        required: true,
    },
    mealsVideo: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Meals", mealsSchema);