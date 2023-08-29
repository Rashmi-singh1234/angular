const con=require('../dbconnecntion'); 
const funct = require('./loginController')
//get single data
module.exports.single=(req,res)=>{

    // check = funct.verifyToken(req.token);
    // console.log(check.status, "creating status status");

    // if (check.status) 
    // {
    let getId=req.params.RollNo;
    let qr=`select RollNO ,Name ,DOB ,Score from studentResult where RollNO=${getId}`;
    con.query(qr,(err,result)=>{
        if(err)
        {
            console.log("erro"+err.errno);
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