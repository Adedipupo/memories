import express from 'express';
import mongoose  from 'mongoose';
import { PostMessage } from '../models/postMessage.js';



export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
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

export const updatePost = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, req.body, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likeAPost = async(req,res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await PostMessage.findById(id);

    if(post){
        const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new:true})
        res.json({data: updatedPost});
    }
}