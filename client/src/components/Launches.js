import React from 'react'
import { useQuery, gql } from '@apollo/client';
import LunchItem from './LunchItem'


const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            name
            id
            success
            date_local
        }
    }
`;
const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) {{console.log(error)} return <p>Error :(</p>;}
    const items = data.launches.map(item =>{
        return(
            <div key={item.id}>
                <LunchItem {...item}/>
            </div>
        )
    })
    return (
        <div>
            <h2 className="display-4 my-3">Launches </h2>
            {items}
        </div>
    )
}

export default Launches
