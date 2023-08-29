const con = require('../dbconnecntion');
const jwt = require('jsonwebtoken');

const funct = require('./loginController')

module.exports.read = (req, res) => {
    //verify token
    // check = funct.verifyToken(req.token);
    // console.log(check.status, "reading status");
    // if (check.status) {
        //var qr = "select RollNO,Name,birth_date as date,MARKS from results";
        var qr = "select RollNo,Name,DOB,Score from studentResult";

        con.query(qr, (err, result) => {
            if (err) {
                console.log("erro" + err.errno);
            }
            console.log(result);
            res.send(result);
        })
    }
    // else {
    //     res.send({

    //         status: false,
    //         msg: "invalid token"
    //     });
    // }


module.exports.create = (req, res) => {

    let rno = req.body.RollNo;
    let name = req.body.Name;
    let dob = req.body.DOB;
    let marks = req.body.Score;
    console.log("hello", rno, name, dob);
    let qr = `insert into results(RollNo,Name,DOB,Score) 
    values('${rno}','${name}','${dob}','${marks}')`;
    console.log(rno, name, dob, marks);
    //verify token
    // check = funct.verifyToken(req.token);
    // console.log(check.status, "creating status status");

    // if (check.status) 
    // {
        con.query(qr, (err, result) => {
            if (err) {
                console.log("erro" + err.message);
            }
            console.log(result);
            res.send(result);
        })
    // }
    // else
    // {
    //     res.send({

    //         status: false,
    //         msg: "invalid token"
    //     });
    // }

}

module.exports.delete = (req, res) => {

    let RollNo = req.params.RollNo;
    let qr = `DELETE from studentResult where RollNO=${RollNo}`;
    //verify token
    // check = funct.verifyToken(req.token);
    // console.log(check.status, "creating status status");

    // if (check.status) 
    // {
    con.query(qr, (err, result) => {
        if (err) {
            console.log("erro" + err.errno);
        }
        console.log(result);
        res.send(result)

    })
// }
// else
// {
//     res.send({

//         status: false,
//         msg: "invalid token"
//     });
// }

}


module.exports.edit = (req, res) => {


    let RollNo = req.params.RollNo;
    let name = req.body.Name;
    let dob = req.body.DOB;
    let marks = req.body.Score;


    let qr = `update results 
    set Name='${name}',DOB='${dob}',MARKS='${marks}'
    where RollNO='${RollNo}'`;
    console.log(name, dob, marks);

    //verify token
    // check = funct.verifyToken(req.token);
    // console.log(check.status, "creating status status");

    // if (check.status) 
    // {
    con.query(qr, (err, result) => {
        if (err) {
            console.log("erro" + err.message);
        }
        else {
            console.log(result);
            res.send(result);
        }

    })
// }
// else
// {
//     res.send({

//         status: false,
//         msg: "invalid token"
//     });
// }
}


