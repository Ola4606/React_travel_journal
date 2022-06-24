import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Locations = (props) => {
    let {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props.data;
  return (
<div className="location--div--main">
    <div className="location--div">
        <img src={imageUrl} alt="" className="location--image"/>
        <div className="location--details">
            <div className="location--location">
                <FontAwesomeIcon icon={faLocationDot}/>
                <p>{location}</p>
                <a href={googleMapsUrl} className="googleMapLink">View On Google Maps</a>
            </div>
            <h1 className="location--title">{title}</h1>
            <p className="location--dates">{`${startDate} - ${endDate}`}</p>
            <p className="location--description">{description}</p>
        </div>
    </div>
    </div>
  );
};

export default Locations;
