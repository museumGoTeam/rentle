import React from 'react'
import HomeIcon from '../components/svgs/HomeIcon'
import ApartmentIcon from '@material-ui/icons/Apartment'
import PersonIcon from '../components/svgs/PersonIcon'

export interface Filter {
    label: string,
    icon: React.ReactElement,
    selected: boolean,
}

const propertyFilters: Filter[] = [
    {
        "label": "Maisons",
        "icon": <HomeIcon />,
        "selected": true
    },
    {
        "label": "Appartements",
        "icon": <ApartmentIcon />,
        "selected": false
    },
    {
        "label": "Locataires",
        "icon": <PersonIcon />,
        "selected": false
    },
]

export default propertyFilters