import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import Badge from "@material-ui/core/Badge";
import "./Image.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
   
  },
  imageGrid: {
    margin: "auto 20px",
  },
  
  gridList: {
    width: 1200,
    height: 900,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  xlarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  margin: {
    margin: theme.spacing(1),
  },
  imageContent: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "90%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Image({ImageData}){
  const [selectImageDetails, setSelectImageDetails] = useState('')
  const [viewSelectedImage, setViewSelectedImage] = useState(false)
  
   
 
  
  function getSeletedImage(id) {
    if (id != null) {
      const selectedImage = ImageData.filter(
        (image) => image.id === id
      );
      console.log(selectedImage[0].comments);
      setSelectImageDetails(selectedImage)
      setViewSelectedImage(true)

     
    }
  }

  const handleClose = () => {
    setSelectImageDetails("")
      setViewSelectedImage(false)
   
  };
  const classes = useStyles();
 
    
    const imagedata = ImageData.map((image) => (
      
      <GridListTile key={image.id}>
        <img src={image.largeImageURL} alt={image.tags} />

        <GridListTileBar
          className="imageListTile"
          title={<span>Tags: {image.tags}</span>}
          subtitle={
            <div>
              <Avatar
                alt="Author"
                src={image.userImageURL}
                className={classes.large}
              />
              <span>by: <strong>{image.user}</strong></span>
            </div>
          }
          actionIcon={
            <IconButton
              aria-label={`info about ${image.user}`}
              className={classes.icon}
              id={image.id}
              onClick={() => getSeletedImage(image.id)}
            >
              <ImageSearchIcon />
            </IconButton>
          }
        />
      </GridListTile>
    ));

    if (viewSelectedImage) {
      let commentValue= (selectImageDetails[0].comments >= 1) ? selectImageDetails[0].comments : 0 ;
      console.log("Comment: "+commentValue);
      return (
        <React.Fragment>
          <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={viewSelectedImage}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogTitle id="max-width-dialog-title">
              Tags: <strong>{selectImageDetails[0].tags}</strong>
            </DialogTitle>
            <DialogContent>
              <div className={classes.imageContent}>
                <Paper className={classes.paper}>
                  <Grid md={12} sm container spacing={2}>
                    <Grid item md={12}>
                      <img
                        className={classes.img}
                        src={selectImageDetails[0].largeImageURL}
                        alt={selectImageDetails[0].tags}
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <Badge
                        badgeContent={
                          selectImageDetails[0].downloads
                        }
                        max={9999999}
                      >
                        <CloudDownloadIcon color="primary" />
                      </Badge>
                    </Grid>
                    <Grid item xs={2}>
                      <Badge
                        badgeContent={selectImageDetails[0].views}
                        max={9999999}
                      >
                        <VisibilityIcon color="primary" />
                      </Badge>
                    </Grid>
                    <Grid item xs={2}>
                      <Badge
                        badgeContent={selectImageDetails[0].likes}
                        max={9999999}
                      >
                        <ThumbUpIcon color="primary" />
                      </Badge>
                    </Grid>
                    <Grid item xs={2}>
                      <Badge
                        badgeContent={
                          selectImageDetails[0].favorites
                        }
                        max={9999999}
                      >
                        <FavoriteBorderIcon color="primary" />
                      </Badge>
                    </Grid>

                    <Grid item xs={2}>
                     
                      <Badge
                        // badgeContent={(selectImageDetails[0].comments != null) ? selectImageDetails[0].comments: 0 }  
                        badgeContent={commentValue}  
                        max={9999999}
                      >
                        <CommentIcon color="primary" />
                      </Badge>
                    </Grid>
                    
                  </Grid>

                  <Grid item md={12} container spacing={2}>
                    <Avatar
                      alt="Author"
                      src={selectImageDetails[0].userImageURL}
                      className={classes.xlarge}
                    />
                    <str>by: {selectImageDetails[0].user}</str>
                  </Grid>
                </Paper>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    }
    return (
      <div className={classes.root}  >
       <div className="imageGrid">
        
       <GridList cellHeight={360} container cols={4} >
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
    <ListSubheader component="div">Search results: About {ImageData.length} results</ListSubheader>
          </GridListTile>
          {imagedata}
        </GridList> 
      
       
     

        

        
       </div>



        
      </div>
    );
  
}

