const router = require("express").Router();
const {response}=require("express");
let User=require("../Models/Users");



router.route("/login").post(async(req,res)=>{
    const{logUserName,logPassword}=req.body;

    const User=await User.findOne({userName:logUserName})
    if(!user){
        return res.status(401).json({
            status:"Faild",
            message:"user not found",
        });
    }

    const Password=await Password.findOne({password:logPassword})
    if(!Password){
        return res.status(401).json({
            status:"Faild",
            message:"invalid password",
        });
    }

    return res.status(200).json({
        status:"success",
        message:"login succesfull",
    });
})


router.route("/add").post((req,res)=> {
    const userName = req.body.userName;

    const password = req.body.password;

    const contactNumber = req.body.contactNumber;


    const newUser = new User({
        userName,
        password,
        contactNumber
    })

    newUser.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/show-all").get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/Update/:id").put(async(req,res)=>{
    let userID = req.params.id;
    
    const {userName, password, contactNumber} = req.body;

    const updateUser = new User ({
        userName,
        password,
        contactNumber
    })

    

    const update = await User.findByIdAndUpdate(userID, updateUser)
    .then(()=>{
        res.status(200).send({status: "User Details Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in updating data", error: err.message});

    })

    
})

router.route("/Delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await User.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "Item Deleted Successfully"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in deleting item", error: err.message});
    })

})

router.route("/view/:id").get((req,res)=>{

    let userId = req.params.id;

    Order.findById(userId).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports = router;