import { Link } from 'react-router-dom';
import 'components/TabButton/TabButton.css'



const TabButton = ({type, text, link}) => {
  return (
    <>
    <Link to = {link}>
      <button className={"tab-btn tab-btn-" + type + " " + type}>
          <b style={{ "letter-spacing": "5px"}}>{text}</b>
      </button>
    </Link>
    </>
)};

export default TabButton;