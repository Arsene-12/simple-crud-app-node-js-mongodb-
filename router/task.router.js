const express = require('express');
const router = express.Router();

const {
    addtask,
    findtask,
    findtaskbyid,
    updatetask,
    deletetask
     }=require('../controllers/task.controller.js');

//inserting records in the collection
router.post('/',addtask);

//find all data in database to retrieve
router.get('/',findtask);


//find data by id
router.get('/:id',findtaskbyid);

//update data in the database
router.put('/:id',updatetask);

//delete task in the database
router.delete('/:id',deletetask);

module.exports = router;