import express from 'express';
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