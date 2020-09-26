import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    fontSize: theme.typography.subtitle2.fontSize,
    color: "white",
    marginTop: 10,
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.8),
    },
  },
}));
type Props = {
  label: string
  to?: string
};

const CustomButton: React.FC<ButtonProps & Props> = ({variant = "contained", color="primary", label,to,className, ...props}) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    to ? history.push(to) : props.onClick && props.onClick(e)
  }

  return (
    <Button {...props} variant={variant} color={color} className={`${classes.root} ${className}`} onClick={handleClick}  disableElevation disableRipple disableFocusRipple>
      {label}
    </Button>
  );
};

export default CustomButton;
