import React, { useState,useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ author: '', title: '', message: '', tags: '', selectedFile: '' })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const clear = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        dispatch(createPost())
    }, [dispatch])

    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Creating a Memory</Typography>
                    <TextField
                        name="author"
                        variant="outlined"
                        label="Author"
                        fullWidth
                        value={postData.author}
                        onChange={(e) => setPostData({ ...postData, author: e.target.value })}
                    />
                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                    <TextField
                        name="message"
                        variant="outlined"
                        label="Message"
                        fullWidth
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    />
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                    />
                    <div className={classes.fileInput}>
                        <FileBase 
                            type="file"
                            mutiple={false}
                            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                        Clear
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default Form
