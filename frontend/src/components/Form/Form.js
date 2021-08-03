import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({ author: '', title: '', message: '', tags: '', selectedFile: '' })
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
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
                </form>
            </Paper>
        </div>
    )
}

export default Form
