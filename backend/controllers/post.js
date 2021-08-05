import express from 'express';
import mongoose  from 'mongoose';
import { PostMessage } from '../models/postMessage.js';



export const createPost = async(req,res) =>{
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json({message: 'Success', post: newPost});
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const getPosts = async(req,res)=>{
    try {
        const posts = await PostMessage.find();

        if(posts.length > 0){
            return res.status(200).json({message:'Success',posts: posts})
        }else{
            return res.status(404).json({message: 'No Post Found'})
        }
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req,res) => {
    try {
        const {id: _id} = req.params;
        const post = req.body;

        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: 'Invalid Id'})

        const updatedPost = await PostMessage.findOneAndUpdate(_id,{post,_id},{new:true})
        res.status(203).json({message: 'Updated', data: updatedPost})
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}