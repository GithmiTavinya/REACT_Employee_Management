const router = require('express').Router();
let Employee  = require('../models/Employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add Function

router.route('/add').post((req, res) => {

    const EmployeeID = req.body.EmployeeID;
    const CompanyName = req.body.CompanyName;
    const Address =req.body.Address;
    const Email = req.body.Email;
    const PostalCode = req.body.PostalCode;
    const Description = req.body.Description;
    const Materials = req.body.Materials;
   

    const newEmployee  = new Employee({
        EmployeeID,
        CompanyName,
        Address,
        Email,
        PostalCode,
        Description,
        Materials
       
    });


    newEmployee.save()
        .then(() => res.json('Employee  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Data 
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => {
            Employee.EmployeeID = req.body.EmployeeID;
            Employee.CompanyName = req.body.CompanyName;
            Employee.Address = req.body.Address;
            Employee.PostalCode = req.body.PostalCode;
            Employee.Email = req.body.Email;
            Employee.Description = req.body.Description;
            Employee.Materials = req.body.Materials;
            
          

            Employee.save()
                .then(() => res.json('Employee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

