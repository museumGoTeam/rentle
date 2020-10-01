import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from "@material-ui/core/Grid";
import PropertyFilters from "../components/home/EntityFilters";
import { useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Properties from "../components/home/Properties";
import Occupants from "../components/home/Occupants";
import NewProperty from "../components/insertion/NewProperty";
import CustomDialog from "../components/CustomDialog";


const useStyles = makeStyles(theme => ({
  cancelButton: {
    backgroundColor: theme.palette.error.main,
    marginRight: 12
  }
}))

const Home = () => {
  const classes = useStyles()
  const [openInsertContainer, setOpenInsertContainer] = React.useState<boolean>(false)
  const {entity} = useParams<{entity: string}>()

  const addEntity = () => {
    setOpenInsertContainer(true)
  }
  const cancelInsertion = () => {
    setOpenInsertContainer(false)
  }


  return (
    <Grid container direction="column">
      <PropertyFilters />
      <CustomDialog open={openInsertContainer} handleClose={() => setOpenInsertContainer(false)} title={entity === "Locataires" ? "Insérer un nouveau locataire" : "Insérer un nouveau bien"}>
        <NewProperty />
      </CustomDialog>
      <Grid item container justify="flex-end" style={{marginBottom: 32}}>
      {openInsertContainer && <CustomButton label="Anuller"  onClick={cancelInsertion} className={classes.cancelButton}/> }
      {!openInsertContainer && entity !== "Locataires" &&  <CustomButton label="Ajouter" type="button" onClick={addEntity}/>}
      </Grid>
      {entity === "Locataires" ? <Occupants /> : <Properties />}
    </Grid>
  );
};

export default Home;
