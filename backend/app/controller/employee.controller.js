const db = require("../models");
const Employee = db.employee;

const student = [{
        idem: 1,
        emusername: 'CPE',
        password: '12345678',
        firstName: 'Puwanat',
        lastName: 'Torcheewee'
    },
    {
        idem: 2,
        emusername: 'BOY',
        password: '11111111',
        firstName: 'Kang',
        lastName: 'Krub'
    }
];


exports.create = (status) => {
    for (let i = 0; i < student.length; i++) {
        const employee = new Employee({
            idem: student[i].idem,
            emusername: student[i].emusername,
            password: student[i].password,
            firstName: student[i].firstName,
            lastName: student[i].lastName
        });
        //console.log(employee);
        employee.save(employee);
    }

    return ({ status: "ready" });

};

exports.deleteAll = () => {
    Employee.deleteMany({})
        .then(data => {})
        .catch(err => {});
    return true;
};

exports.findEmployee = (req, res) => {
    const dataObj = {
            username: req.params.username.split(":"),
            password: req.params.password.split(":")
        }
        //console.log("Here " + dataObj.username + ", " + dataObj.password);
    Employee.find({ username: dataObj.username, password: dataObj.password })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Register with id " + id });
            else res.send({ username: dataObj.username, password: dataObj.password });
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Register with id=" + id });
        });
};