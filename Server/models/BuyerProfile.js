const mongoose = require('mongoose');

const buyerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    // Business Info
    buyerType: {
      type: String,
      enum: ['consumer', 'retailer', 'restaurant', 'processor', 'wholesaler'],
    },
    businessName: String,
    address: String,
    gstNumber: String,
    // Procurement
    preferredCrops: [String],
    typicalOrderSize: String,
    // Marketplace Stats
    paymentMethod: String,
    verificationStatus: {
      type: String,
      enum: ['Pending', 'Verified', 'Rejected'],
      default: 'Pending',
    },
    rating: {
      type: Number,
      default: 0,
    },
    totalOrders: {
      type: Number,
      default: 0,
    },
    totalPurchase: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('BuyerProfile', buyerProfileSchema);
