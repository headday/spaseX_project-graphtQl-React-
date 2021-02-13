import React from 'react'
import { useQuery, gql } from '@apollo/client';
import {useHistory} from 'react-router-dom'


 const LAUNCH_QUERY = gql`
  query oneLaunch($launch_id: String!){
    	launch(id: $launch_id){
        name,
        date_local,
        id,
        success,
        flight_number
        details
    }
}
`; 
const Launch = (props) => {
  let history = useHistory();
  let { id } = props.match.params;
  const { loading, error, data } = useQuery(LAUNCH_QUERY,{
    variables:{ launch_id:id }
  });
  if (loading) return <p>Loading...</p>;
  if (error) {{console.log(error)} return <p>Error :(</p>;}

  
  const handleClick = ()=>{
    history.push('/')
  }
  return (
    <div className="card card-body mb-8">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Name: {data.launch.name}
          </h4>
          <h4>
            Date: {data.launch.date_local}
          </h4>
          <h5>
            Flight number: {data.launch.flight_number}
          </h5>
          <div>
            Details 
          </div>
          <p>
          {data.launch.details}
          </p>
          <div className={data.launch.success ? 'text-success' : 'text-danger'}>
            {data.launch.success ? 'Succes' : 'Fail(('}
          </div>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary" onClick={handleClick}>Go back</button>
        </div>
      </div>
    </div>
      
  )
}

export default Launch
