import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from '@material-ui/core/Grid'
import { initialPropertyForm } from "../constants/initstate";
import DetailList from "../components/details/DetailList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "auto",
    paddingTop: 32,
    paddingBottom: 32,
  },
  rightSide: {
    paddingTop: 16,
    paddingLeft: 64,
    paddingRight: 64,
    maxHeight: '100vh',
    overflowY: "auto",
  },
}));




const CRUD = () => {
  const classes = useStyles()
  const [form, setForm] = React.useState(initialPropertyForm)

  const onChange = (value: unknown, name: string) => {
    if (name === "BALCONY" || name === "GARDEN" || name === "ROOFTOP") {
      if (value === "non") {
        const newOpenSpaces = form.openSpaces.filter(openSpace => openSpace !== name)
        return setForm({...form, openSpaces: newOpenSpaces})
      }
      return setForm({...form, openSpaces: [...form.openSpaces, name]})
    }
    setForm({...form, [name]: value}) 
  }

  const handleHtmlInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e.target.name)
  }

  const hasThisSpace = (space: "BALCONY" | "GARDEN" | "ROOFTOP") => form.openSpaces.includes(space)

  console.log(form)
  return (
    <Grid container className={classes.root}>
      <DetailList title="Habitation">
        
      </DetailList>
  </Grid>
  );
};

export default CRUD;
