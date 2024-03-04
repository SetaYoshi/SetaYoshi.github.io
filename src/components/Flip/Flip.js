
import { TextClick } from 'components';
import 'components/Flip/Flip.css'

function Flip({ type, img, title, desc, link, linkText }) {
  return (<>
    <div className={"flip flip-" + type} style={{"text-align":"left"}}>
        <text style={{ "font-size": 20 }}><b>{title}</b></text>
      <p/>
        <text style={{ "font-size": 14 }}>{desc}</text>
      <p/>
      <TextClick link={link}>{linkText}</TextClick>
    </div>
    <p/>
  </>)
}



export default Flip;