import React from 'react'
import { Property } from '../../pages/types'
import PropertyCard from './PropertyCard'
import useFetch from '../../hooks/useFetch'


const Properties = () => {

  const {data, loading} = useFetch<Property>({uri: "http://localhost:5000/api/properties/", method: "GET"})
  
    if (loading) return <div>Loading ...</div>
    if (!data) return <div>Erreur de communication avec le serveur</div>

    return <div>
        {data.map(property => <PropertyCard key={property.id} {...property} />)}
    </div>
}

export default Properties