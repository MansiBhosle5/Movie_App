const express = require("express");
const mongoose = require("mongoose");
const MovieModel = require("../model/movie");
const router =  express.Router();

//get movie
router.get("/",async(req,res)=>{
    try{
     const movies = await MovieModel.find();
     res.json(movies);
    } catch(error){
      res.status(500).json({message: error.message});
    }
 })
 //post movie
 router.post("/",async(req,res) =>{
 
     try{ 
         const {name,description,genre,image} = req.body;
         const movie = new MovieModel({
             name,
             description,
             genre,
             image
         })
         const savedMovie = await movie.save();
         res.status(201).json(savedMovie);
      }catch(error){
      res.status(500).json({message: error.message});
    }
 })
 //update movie
 router.put("/:id",async(req,res)=>{
     try{
         const{id} = req.params;
         const { name, description, genre, image } = req.body;
         const movie = await MovieModel.findByIdAndUpdate(id,{
             name,
             description,
             genre,
             image
         },{new: true});
         res.status(201).json(movie);
     } catch(error){
         res.status(500).json({message: error.message});
       }
 })
 //delete movie
 router.delete("/:id",async(req,res)=>{
     try{
         const{id} = req.params;
         const movie = await MovieModel.findByIdAndDelete(id);
         res.status(201).json(movie);
     } catch(error){
         res.status(500).json({message: error.message});
       }
 
     })

     module.exports = router;