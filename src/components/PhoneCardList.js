import { Link } from "react-router-dom";

function PhoneCardList({manufacturer, name, color, price, imageFileName , id}) {

  return(
    <div className="sub-phone-list">
      <h3>{manufacturer}</h3>
        <img src={imageFileName} alt="img"/>
        <h5>{color}</h5>
        <h4>{price}</h4>

        <Link to={`/phones/${id}`}>Details</Link>
    </div>
  )
}

export default PhoneCardList;