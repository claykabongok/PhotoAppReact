import {  makeStyles } from '@material-ui/core/styles';
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

  export default useStyles;
  