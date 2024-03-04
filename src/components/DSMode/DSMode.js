import 'components/DSMode/DSMode.css'

const ContactButton = ({ children }) => {
  return (<>
  <div className="dsm-code-header" style={{"text-align":"left"}}>
    <strong>*Specific Classification Code</strong>
  </div>
  <div className="dsm-code-body">
    {children}
  </div>
  </>)
};


export default ContactButton;