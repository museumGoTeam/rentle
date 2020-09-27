import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Occupant } from '../../pages/types'
import OccupantCard from './OccupantCard'

const Occupants = () => {


    const {data, loading} = useFetch<Occupant[]>({uri: "http://localhost:5000/api/occupants", method: "GET"})
  
    if (loading) return <div>Loading ...</div>
    if (!data) return <div>Erreur de communication avec le serveur</div>

    return (
        <div>
            {data.map(occupant => <OccupantCard key={occupant.id} {...occupant} />)}
        </div>
    )
}

export default Occupants
