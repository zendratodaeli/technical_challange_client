import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhonePageDetails() {
  const API_URL = "http://localhost:5005";

  const {id} = useParams();
  const[phoneDetails, setPhoneDetails] = useState("");

  const fetchingPhoneDetails = () => {
    axios.get(`${API_URL}/api/phones/${id}`)
      .then(response => setPhoneDetails(response.data))
      .catch(e => console.error(e));
  }

  useEffect(() => {
    fetchingPhoneDetails();
  }, [])

  return(
    <div className="phone-details">
      <h1>{phoneDetails.id}</h1>
      <h2>{phoneDetails.name}</h2>
      <h4>{phoneDetails.manufacturer}</h4>
      <p> {phoneDetails.description} </p>
      <p> {phoneDetails.color} </p>
      <p> {phoneDetails.price} </p>
      
      <img src={phoneDetails.imageFileName} alt="img"/>
      <h5> {phoneDetails.screen} </h5>
      <h6>{phoneDetails.processor}</h6>
      <h6>{phoneDetails.ram}</h6>
    </div>
  )
}

export default PhonePageDetails;