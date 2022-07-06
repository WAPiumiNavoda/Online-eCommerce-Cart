const router = require("express").Router();
let Item = require("../models/Item");


//Create Function

router.route("/add").post((req,res)=>{
    const itemName = req.body.itemName;
    const price = req.body.price;
    const description = req.body.description;
    const countInStock = req.body.countInStock;
    const imageUrl = req.body.imageUrl;
    const size = req.body.size;

    const newItem = new Item({
        itemName,
        price,
        description,
        countInStock,
        imageUrl,
        size
    })

    newItem.save().then(()=>{
        res.json("Item Added");
    }).catch((err)=>{
        console.log(err);
    })
})


/*

//Add Products
router.post('/add',(req,res)=>{
    let newItem = new Item(req.body);
    newItem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "Add Product Saved Successfully"
        });
    });
});

*/

//Read Products

router.get('/read',(req,res)=>{
    Item.find().exec((err,Item)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:true,
            existingPosts:Item
        });
    });
});


//Update Products
router.put('/update/:id',(req,res)=>{
    Item.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,updateItem)=>{
            
                if(err){
                    return res.status(400).json({error:err});
                }
                return res.status(200).json({
                    success:"Updated Product"
                });
            }
        
    );
});

//Delete Products
router.delete('/delete/:id',(req,res)=>{
    Item.findByIdAndRemove(req.params.id).exec((err,deleteItem)=>{
        if(err) return res.status(400).json({
            message:"Deleted Unsuccess",err
        });
        return res.json({
            message:"Delete success",deleteItem
        });
    });
});

module.exports = router;