const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var{ Employee } = require('../models/employee');


// localhost:3000/employees
router.get('/', (req,res) => {
    Employee.find((err, docs) => {
        if(!err) {
            res.send(docs);
        }
        else{
            console.log('Error in Retriving Employees : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//used to saved data
router.post('/', (req,res) => {
    var emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        designation: req.body.designation,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if(!err) 
        { 
            res.send(doc); 
        }
        else{
            Console.log('Error in Employee Save : ' + JSON.stringify(err,undefined, 2));
        }
    });
});



//get data by id
router.get('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.send('data not found');
    
    Employee.findById(req.params.id, (err,doc) => {
        if(!err){res.send(doc)}
        else
        return res.send('data not getting from employee');
    });
});

//update data by id
router.put('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.send('data not found with given id for update');

    var emp = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        designation: req.body.designation,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc) => {
        if(!err) { res.send(doc); }
        else
        return res.send('data not updated');
    });
});

//delete data by id
router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.send('data not found with given id for delete')

    Employee.findByIdAndDelete(req.params.id, (err, doc) => {
        if(!err) { res.send(doc);}
        else
        console.log('Error in deleting record by id');
    })
});
module.exports = router;