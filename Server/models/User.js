const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      enum: ['farmer', 'buyer', 'admin'],
      required: [true, 'Please specify a role'],
    },
    // Farmer specific fields
    farmerProfile: {
      location: String,
      landArea: Number,
      landUnit: String,
      ownershipType: String,
      crops: [String],
      irrigationType: String,
      farmLocation: String,
      verificationStatus: {
        type: String,
        default: 'Pending',
      },
    },
    // Buyer specific fields
    buyerProfile: {
      businessName: String,
      businessType: String,
      address: String,
      gstin: String,
      cropsInterested: [String],
      typicalQuantity: String,
      qualityRequirements: String,
      verificationDocuments: String,
      verificationStatus: {
        type: String,
        default: 'Pending',
      },
      rating: {
        type: Number,
        default: 0,
      },
      completedOrders: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Encrypt password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
