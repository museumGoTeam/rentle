import { Guarantor, Meter, Person } from ".";

export interface PropertyForm  {
  type: string
  floorNumber: number
  bedroomCount: number
  size: number,
  sizeLivingRoom: number,
  sizeKitchen: number,
  price: number,
  charges: number,
  address: LocationForm,
  image: string
};

export interface OccupantForm extends Person{
  nationalRegistry: string,
  birthDate: string,
  propertyID?: string,
}

export interface GuarantorForm extends Person {}

export interface LeaseForm {
  beginDate: string,
  endDate: string,
  visitBeginDate: string,
  visitEndDate: string,
  index: number,
  signatureDate: string,
  depositDate: string | undefined,
  isFirstMonthPaid: boolean,
  gasMeter: Meter,
  waterMeter: Meter,
  electricityMeter: Meter
}

export interface LocationForm {
    street: string
    zipcode: number
    city: string,
    country: string
}
