import { GuarantorForm, LeaseForm, OccupantForm } from "../pages/types/form";

export const initialOccupantForm: OccupantForm = {
  gender: "homme",
  name: "",
  surname: "",
  birthDate: new Date().toISOString(),
  nationalRegistry: "",
  email: "",
  gsm: "",
  avatar: "",
  address: {
    street: "",
    zipcode: 0,
    city: "",
    country: "",
  },
};


export const initialGuarantorForm: GuarantorForm = {
  gender: "homme",
  name: "",
  surname: "",
  email: "",
  gsm: "",
  avatar: "",
  address: {
    street: "",
    zipcode: 0,
    city: "",
    country: "",
  },
};

export const initialLeaeForm: LeaseForm = {
  beginDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  visitBeginDate: new Date().toISOString(),
  visitEndDate: new Date().toISOString(),
  index: 800,
  isFirstMonthPaid: false,
  gasMeter: {
    beginValue: 100
  },
  waterMeter: {
    beginValue: 100
  },
  electricityMeter: {
    beginValue: 100
  },
  depositDate: new Date().toISOString(),
  signatureDate: new Date().toISOString()
}
