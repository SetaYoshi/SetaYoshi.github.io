import { useEffect } from "react"

const HOME = () => {
  useEffect(() => {
    document.title = "SetaYoshi's House"
  })

  return (

    <center>
    <section className="card">

    <p style={{'font-size': 60}}>WELCOME</p>
    <p style={{'font-size': 16}}>Sample text. Click to select the Text Element.</p>

    <br/><br />
    
    </section>
    </center>

  )
};

export default HOME;