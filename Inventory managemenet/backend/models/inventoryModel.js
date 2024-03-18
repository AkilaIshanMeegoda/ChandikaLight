import mongoose from 'mongoose';

const InventorySchema = mongoose.Schema(
    {
        itemName: {
          type: String,
          required: true,
        },
        quantityInStock: {
          type: Number,
          required: true,
        },
        unitPrice: {
          type: Number,
          required: true,
        },
        dateAdded: {
          type: Date,
          required: true,
          default: Date.now, // Set the default value to the current date
          get: (date) => date.toISOString().split('T')[0], // Getter function to format the date
        },
        description: {
          type: String,
          required: true,
        },
      },
     
);


export const Inventory = mongoose.model('Inventory', InventorySchema);
