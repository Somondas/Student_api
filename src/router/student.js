const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/students", async(req, res) =>{
    try{
        const userData = new Student(req.body);
        const createUser = await userData.save()
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
    
})
// for fetching the api(getting the data from the api)
router.get("/students", async(req, res) =>{
    try {
        const getData = await Student.find()
    res.status(201).send(getData)
    } catch (e) {
        res.status(400).send(e)
    }
    
})

router.get("/students/:name", async(req, res) =>{
    try {
        const name = req.params.name;
        const getStudent =await Student.find({name: name});
        res.status(201).send(getStudent);
    } catch (e) {
        res.status(400).send(e)
    }
    
})
// For deleting the collection
router.delete("/students/:id", async(req, res) =>{
    try{
        const deleteUser = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteUser)

    }catch (e) {
        res.status(500).send(e)
    }
})
// update the data by id
router.patch("/students/:id", async (req, res) =>{
    try {
        const updateUser = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).send(updateUser);
        if (!req.params.id) {
            res.status(404).send()
        }
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports = router;