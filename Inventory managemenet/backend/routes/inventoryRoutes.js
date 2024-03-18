import express from 'express';
import { Inventory } from '../models/inventoryModel.js';

const router = express.Router();

// Route for saving a new inventory item
router.post('/', async (request, response) => {
    try {
      if (
        !request.body.itemName ||
        !request.body.quantityInStock ||
        !request.body.unitPrice ||
        !request.body.description
      ) {
        return response.status(400).send({
          message: 'Send all required fields: itemName, quantityInStock, unitPrice, description',
        });
      }
  
      const newInventory = {
        itemName: request.body.itemName,
        quantityInStock: request.body.quantityInStock,
        unitPrice: request.body.unitPrice,
        description: request.body.description,
        dateAdded: new Date(), // Add the current date and time
      };
  
      const inventory = await Inventory.create(newInventory);
  
      return response.status(201).send(inventory);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route for Get All inventories from database
  router.get('/', async (request, response) => {
      try {
        const inventory = await Inventory.find({});
    
        return response.status(200).json({
          count: inventory.length,
          data: inventory,
        });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });
  
    
  // Route for Get One Inventory from database by id
  router.get('/:id', async (request, response) => {
      try {
        const { id } = request.params;
    
        const inventory = await Inventory.findById(id);
    
        if (!inventory) {
          return response.status(404).json({ message: 'Inventory not found' });
        }
    
        return response.status(200).json(inventory);
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });
    
    // Route for Update an Inventory
    router.put('/:id', async (request, response) => {
      try {
        const { id } = request.params;
    
        if (
          !request.body.itemName ||
          !request.body.quantityInStock ||
          !request.body.unitPrice ||
          !request.body.description
        ) {
          return response.status(400).send({
            message: 'Send all required fields: itemName, quantityInStock, unitPrice, description',
          });
        }
    
        const updatedInventory = await Inventory.findByIdAndUpdate(id, request.body, { new: true });
    
        if (!updatedInventory) {
          return response.status(404).json({ message: 'Inventory not found' });
        }
    
        return response.status(200).json({ message: 'Inventory updated successfully', data: updatedInventory });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });
    
    // Route for Delete an inventory
    router.delete('/:id', async (request, response) => {
      try {
        const { id } = request.params;
    
        const deletedInventory = await Inventory.findByIdAndDelete(id);
    
        if (!deletedInventory) {
          return response.status(404).json({ message: 'Inventory not found' });
        }
    
        return response.status(200).json({ message: 'Inventory deleted successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    });

    export default router;