const mongoose = require('mongoose');

const printerSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true }, 
    name: { type: String, required: false }, 
    ip: { type: String, required: false }, 
    location: { type: String, required: false }, 
    status: { type: String, enum: ['D', 'E'], default: 'D' },  
    lastUsed: { type: String }, 
    condition: { type: String, enum: ['U', 'M', 'B', 'R'] },  
    description: { type: String },
}, {
    timestamps: false,
    versionKey: false,
});

module.exports = mongoose.model('Printer', printerSchema);

