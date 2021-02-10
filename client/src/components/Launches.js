import React from 'react'
import { useQuery, gql } from '@apollo/client';


const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches{
            name
        }
    }
`;
const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) {{console.log(error)} return <p>Error :(</p>;}
    return (
        <div>
            <h2 className="display-4 my-3"> Launches </h2>
        </div>
    )
}

export default Launches
