import 'components/DSMock/DSMock.css'

const ContactButton = ({ name, code, children }) => {
  return (<>
  <div className="dsm-title" style={{ "text-align": "center" }}>
    <strong>{name}</strong>
  </div>
  <div className="dsm-header" style={{"text-align":"left"}}>
    <strong>Diagnostic Criteria</strong>
    <span style={{"float":"right"}}>
      <strong>{code}</strong>
    </span>
  </div>
  <div className="dsm-body">
    {children}
  </div>
  </>)
};


export default ContactButton;