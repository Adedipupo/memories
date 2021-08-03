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