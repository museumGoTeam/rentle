


export const initialPropertyForm: any = {
    floor_count: 1,
    bedroom_count: 1,
    bathroom_count: 1,
    size: 10,
    type: "Maison",
    openSpaces: [],
    price: 0.0,
    deposit: 0.0,
    charges: 0.0,
    image: undefined
}

export const initialOccupantForm: any = {
    guarantor_name: "John",
    guarantor_surname: "Doe",
    guarantor_age: "34",
    guarantor_avatar: undefined,
    guarantor_street: "",
    guarantor_city: "",
    guarantor_country: "",
    occupant_name: "Jane",
    occupant_surname: "Doe",
    occupant_avatar: undefined,
    occupant_age: "17",
    occupant_street: "",
    occupant_city: "",
    occupant_country: "",
    meter_date_begin: new Date().toISOString(),
    meter_value_begin: "0",
    meter_date_end: "",
    meter_value_end: "",
    begin: new Date().toISOString(),
    end: "",
    visit_begin: new Date().toISOString(),
    visit_end: "",
    paiement: new Date().toISOString(),
    indexation: new Date().toISOString(),
    signature: new Date().toISOString(),
    property: undefined,
    avatar: ""
}