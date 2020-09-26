export interface Property {
    ID: string,
    occupantID?: string | undefined,
    floorNumber: number,
    type: string,
    bedroomCount: number,
    size: number,
    sizeLivingRoom: number,
    sizeKitchen: number,
    price: number,
    charges: number,
    image: string,
    address: Location,
    leasedBy?: Occupant | undefined

}


export interface Occupant extends Person {
    ID: string,
    propertyID: string,
    nationalRegistry: string,
    birthDate: string,
    guarantor: Guarantor,
    propertyLeased: Property
}


export interface Lease {
    ID: string,
    propertyID: string,
    occupantID: string,
    beginDate: string,
    endDate: string,
    visitBeginDate: string,
    visitEndDate: string,
    signatureDate: string,
    depositDate?: string | undefined,
    index: number,
    isFirstMonthPaid: boolean,
    property: Property
    occupant: Occupant

}


export interface Guarantor extends Person {}
export interface Person {
    gender: string,
    name: string,
    surname: string,
    email: string,
    gsm: string,
    avatar: string,
    address: Location
}


export interface Location {
    street: string,
    zipcode: number,
    city: string,
    country: string
}