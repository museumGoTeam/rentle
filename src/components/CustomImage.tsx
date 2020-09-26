import React from "react";
import CardMedia, {CardMediaProps} from "@material-ui/core/CardMedia";



const CustomImage: React.FC<CardMediaProps> = ({src, className}) => {
  return <CardMedia src={src} className={className} component="img"/>;
};

export default CustomImage;
