import React from "react";
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { initialGuarantorForm, initialLeaeForm, initialOccupantForm } from "../constants/initstate";
import { GuarantorForm, LeaseForm, OccupantForm } from "./types/form";
import axios from 'axios'
import CustomStepper from "../components/CustomStepper";
import NewGurantor from "../components/insertion/NewGurantor";
import Writelease from "../components/insertion/WriteLease";
import NewOccupant from "../components/insertion/NewOccupant";
import { useParams, useHistory } from "react-router-dom";
import { RentleResponse } from "./types";
import { message } from "antd";


const InsertOccupant = () => {
  const {id} = useParams<{id: string}>()
  const history = useHistory()
  const [occupantForm, setOccupantForm] = React.useState<OccupantForm>({...initialOccupantForm, propertyID: id});
  const [guarantorForm, setGuarantorForm] = React.useState<GuarantorForm>(initialGuarantorForm)
  const [leaseForm, setLeaseForm] = React.useState<LeaseForm>(initialLeaeForm)

  const returnToHomePage = () => {
    history.push('/')
  }
  const handleOccupantChange = (value: string | number | Object, name: string) => {
    setOccupantForm({ ...occupantForm, [name]: value });
  };

  const handleGuarantorChange = (value: string | number | Object, name: string) => {
    setGuarantorForm({ ...guarantorForm, [name]: value });
  };

  const handleLeaseChange = (value: string | number | Object, name: string) => {
    if (name === "isFirstMonthPaid") setLeaseForm({...leaseForm, isFirstMonthPaid: value === "non" ? false:  true}) 
    else setLeaseForm({ ...leaseForm, [name]: value });
  };

  const onSubmit = async () => {
    message.loading("Insertion du locataire ...")
    const res = ( await axios.post<RentleResponse>('http://localhost:5000/api/occupants', {...occupantForm, guarantor: guarantorForm, lease: leaseForm})).data
    res.success ? message.success(res.message) : message.error(res.message)
    returnToHomePage()
  };

  return (
    <form style={{ width: '80%', margin: 'auto', paddingTop: 32}}>
      <IconButton onClick={returnToHomePage}>
        <ArrowBackIcon />
      </IconButton>
      <CustomStepper
        steps={[
          "Ajout d'un locataire",
          "Ajout d'un guarant",
          "Rédaction du bail",
        ]}
        stepNodes={[
          <NewOccupant
            form={occupantForm}
            handleChange={handleOccupantChange}
          />,
          <NewGurantor
            form={guarantorForm}
            handleChange={handleGuarantorChange}
          />,
          <Writelease form={leaseForm} handleChange={handleLeaseChange} />
        ]}
        onSubmit={onSubmit}
      />
    </form>
  );
};

export default InsertOccupant;
