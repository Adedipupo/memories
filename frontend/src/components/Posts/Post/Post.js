import React from 'react'
import useStyles from './styles';
import { Card,CardMedia, CardActions,CardContent,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const Post = ({post}) => {

    const classes = useStyles();
    return (
        <Card>
          <CardMedia className={classes.media} image={Post.selectedFile} title={post.title}/>        
        </Card>
    )
}

export default Post
