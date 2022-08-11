const express=require("express")
const router=express.Router();
const Contact=require('./models/contact');
router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/education',(req,res)=>{
    res.render('education')
})
router.get('/experince',(req,res)=>{
    res.render('experince')
})

router.get('/project',(req,res)=>{
    res.render('project')
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})
router.post('/submitContact', (req,res)=>{
    const contact = new Contact ({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        reason: req.body.reason,
        comments: req.body.comments
    });
    Contact.collection.insertOne(contact)
    .then(result=>{
        res.render('contact')

    })
    .catch(err=>console.log(err));
})
module.exports=router;