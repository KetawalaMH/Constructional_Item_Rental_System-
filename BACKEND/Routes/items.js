const router = require("express").Router();


let Item = require("../Models/Items");


router.route("/add").post((req,res)=> {
    const name = req.body.name;

    const description = req.body.description;

    const dailyRate = req.body.dailyRate;


    const newItem = new Item({
        name,
        description,
        dailyRate
    })

    newItem.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/show-all").get((req,res)=>{
    Item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/Update/:id").put(async (req, res) => {
    let itemId = req.params.id;
    const { name, description, dailyRate } = req.body;

    const updateItem = {
        name,
        description,
        dailyRate
    }

    const update = await Item.findByIdAndUpdate(itemId, updateItem) // Corrected the function name
        .then(() => {
            res.status(200).send({ status: "Item Details Updated" }); // Changed "user" to "item"
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error in updating data", error: err.message });
        });
});


router.route("/Delete/:id").delete(async(req,res)=>{
    let itemId = req.params.id;

    await Item.findByIdAndDelete(itemId)
    .then(()=>{
        res.status(200).send({status: "Item Deleted Successfully"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in deleting item", error: err.message});
    })

})

router.route("/view/:id").get((req,res)=>{

    let itemId = req.params.id;

    Item.findById(itemId).then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err)
    })


})



router.route("/view/:name").get((req,res)=>{

    let itemName = req.params.name;

    Item.findOne(itemName).then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err)
    })


})





module.exports = router