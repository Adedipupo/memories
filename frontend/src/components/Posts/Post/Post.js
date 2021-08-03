import React from 'react'
import useStyles from './styles';
import { Card,CardMedia, CardActions,CardContent,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


const Post = ({post}) => {

    const classes = useStyles();
    return (
        <Card>
          <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>   
          <div className={classes.overlay}>
             <Typography variant="h6">{post.author}</Typography>
             <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>     
          <div className={classes.overlay2}>
             <Button style={{color:'white'}} size="small" onClick={()=>{}}>
                <MoreHorizIcon fontSize="default"/>
             </Button>
          </div>     
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>
          </div>     
            <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
        </Card>
    )
}

export default Post
