
import {v4 as uuidv4} from "uuid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt,faStar } from '@fortawesome/free-solid-svg-icons';
const Rating = ({value,text, color}) => {
  return ( 
    <div>
{[1,2,3,4,5].map((rate)=> (
  <span key={uuidv4}>
    <i style={{color}}>
      {value+1 === rate +0.5? <FontAwesomeIcon icon={faStarHalfAlt} />: value>=rate?<FontAwesomeIcon icon={faStar} />:<FontAwesomeIcon icon={faStar} />}
    </i>
  </span>
))}

<span>{text&&text}</span>
    </div>
   );
}



Rating.defaultProps = {
  color:"#FFA41C"

}

export default Rating
 
