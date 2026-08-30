const mongoose = require('mongoose');

const farmerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    // Farm Info
    farmName: String,
    farmSize: Number,
    landUnit: String,
    location: {
      village: String,
      district: String,
      state: String,
      pincode: String,
    },
    // Agriculture
    crops: [String],
    farmingType: {
      type: String,
      enum: ['organic', 'conventional', 'mixed'],
    },
    irrigationType: String,
    soilType: String,
    // Verification
    farmerId: String,
    verificationStatus: {
      type: String,
      enum: ['Pending', 'Verified', 'Rejected'],
      default: 'Pending',
    },
    // Marketplace Stats
    rating: {
      type: Number,
      default: 0,
    },
    totalOrders: {
      type: Number,
      default: 0,
    },
    totalSales: {
      type: Number,
      default: 0,
    },
    // Logistics
    pickupAddress: String,
    // Optional
    certifications: [String],
    bankDetails: {
      accountName: String,
      accountNumber: String,
      ifscCode: String,
      bankName: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('FarmerProfile', farmerProfileSchema);
