import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'
import { CardMediaProps } from "@material-ui/core/CardMedia";
import CustomImage from "../CustomImage";


const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    }
}))



const CardMedia: React.FC<CardMediaProps> = ({src, className}) => {
  const classes = useStyles()
  return <CustomImage src={src} className={`${className} ${classes.root}`} />;
};

export default CardMedia;
