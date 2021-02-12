import React from 'react'
import { useQuery, gql } from '@apollo/client';


 const LAUNCH_QUERY = gql`
  query oneLaunch($launch_id: String!){
    	launch(id: $launch_id){
        name,
        date_local,
        id,
        success,
        flight_number
    }

}
`; 
const Launch = (props) => {
  let { id } = props.match.params;
  const { loading, error, data } = useQuery(LAUNCH_QUERY,{
    variables:{ launch_id:id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) {{console.log(error)} return <p>Error :(</p>;}
  console.log(data)
  return (
    <h2>
      Launc
    </h2>
  )
}

export default Launch
