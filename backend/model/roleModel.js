const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
      },
      permissions: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Permission',
        },
      ],
    }
  );

  module.exports = mongoose.model('Role', roleSchema)