import mongoose  from "mongoose";

const PurchaseSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId,
         ref: 'Course', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId,
         ref: 'User', required: true },
         amount: { type: Number, required: true },
         status: { type: String, enum:['pending', 'completed', 'failed'], default: 'pending' },

}, {timestamp:true});

export const Purchase = mongoose.model('Purchase', PurchaseSchema);
