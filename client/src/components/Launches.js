import React from 'react'
import { useQuery, gql } from '@apollo/client';
import LunchItem from './LunchItem'
import MissionKey from './MissionKey'


const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            name
            id
            success
            date_local
            flight_number
        }
    }
`;
const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) {{console.log(error)} return <p>Error :(</p>;}
    
    return (
        <div>
            <h2 className="display-4 my-3">Launches </h2>
            <MissionKey/>
            {
                data.launches.map(item =>{
                    return(
                        <div key={item.id}>
                            <LunchItem {...item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Launches
