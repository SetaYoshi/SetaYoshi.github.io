import { Link } from 'react-router-dom';
import 'components/ContactButton/ContactButton.css'

const ContactButton = ({ text, link }) => {
  return (
    <>
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <button className={"cont-btn"}>
        {text}
      </button>
    </Link>
    </>
  )
};


export default ContactButton;