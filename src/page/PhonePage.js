import axios from "axios";
import { useEffect, useState } from "react";
import PhoneCardList from "../components/PhoneCardList";
import { Link } from "react-router-dom";

function PhonePage() {

  const API_URL = "http://localhost:5005";

  const[phoneList, setPhoneList] = useState([]);

  useEffect(() => {
    const fetchPhoneList = () => {
      axios.get(`${API_URL}/api/phones`)
        .then(respose => setPhoneList(respose.data))
        .catch(e => console.log(e));
    };

    fetchPhoneList();
  }, [])
  
  if(phoneList.length === undefined) {
    <p>Loading ...</p>
  } else {
      return(
        <div className="phone-list">
          { phoneList.map(element => (
            <div key={element.id} className="sub-phone-list">
              <PhoneCardList {...element} />
            </div>
          )) }

        </div>
      )

  }
}

export default PhonePage;