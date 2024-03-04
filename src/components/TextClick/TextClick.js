import { Link } from 'react-router-dom';
import 'components/TextClick/TextClick.css'

const TextClick = ({ link, size, children }) => {
  size = size || 16
  return (
    <Link to={link}>
      <text className="textclick" style={{'font-size': size}}>{children}</text>
    </Link>
  )
};

export default TextClick;