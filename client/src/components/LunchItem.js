import React from 'react'
import {Link} from 'react-router-dom'


const LaunchItem = (props) => {
  return (
    <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-9">
            <h4>Mission</h4>
            <h4 className={props.success === true ? 'text-success' : 'text-danger'}>{props.name}</h4>
            <p>Date: {props.date_local}</p>
            </div>
            <div className="col-md-3">
                <Link to={`/launch/${props.flight_number}`}><button className="btn btn-secondary">Details</button></Link>
            </div>
        </div>
     
    </div>
  )
}

export default LaunchItem
