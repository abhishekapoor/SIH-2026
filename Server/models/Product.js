const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FarmerProfile',
      required: true,
    },
    cropName: {
      type: String,
      required: true,
    },
    variety: String,
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    pricePerUnit: {
      type: Number,
      required: true,
    },
    qualityGrade: String,
    harvestDate: Date,
    availableFrom: Date,
    availableUntil: Date,
    location: String,
    images: [String],
    status: {
      type: String,
      enum: ['AVAILABLE', 'SOLD', 'EXPIRED'],
      default: 'AVAILABLE',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
