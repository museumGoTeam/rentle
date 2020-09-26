export type PropertyForm = {
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

export type LocationForm = {
    street: string
    zipcode: number
    city: string,
    country: string
}
