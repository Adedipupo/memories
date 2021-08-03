import React,{useState} from 'react'
import {TextField,Button,Typography,Paper} from '@material-ui/core'; 
import useStyles from './styles';

const Form = () => {
    cosnt [postData,setPostData] = useState({author: '', title: '', message: '', tags: '',selectedFile: ''})
    const classes = useStyles();

    const handleSubmit = (e)=>{
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
                   onChange={}    
                   />
                </form>
            </Paper>
        </div>
    )
}

export default Form
