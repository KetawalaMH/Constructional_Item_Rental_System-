const router = require("express").Router();
const Item = require('../Models/Items');

let Order = require("../Models/Orders");

router.route("/add").post(async (req, res) => {
    const recieverName = req.body.recieverName;
    const recieveAddress = req.body.recieveAddress;
    const itemId = req.body.itemId;
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);

    const item = await Item.findById(itemId);

    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }
    console.log("dailyRate:", item.name);

    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const price = item.dailyRate * days;

    const newOrder = new Order({
        recieverName,
        recieveAddress,
        itemId,
        startDate,
        endDate,
        price,
    });

    newOrder
        .save()
        .then(() => {
            res.status(201).json({ status: "Order Added" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ status: "Error in adding order", error: err.message });
        });
});


router.route("/show-all").get((req,res)=>{
    Order.find().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/view/:id").get((req,res)=>{

    let orderId = req.params.id;

    Order.findById(orderId).then((order)=>{
        res.json(order)
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router;