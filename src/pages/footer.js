import React from "react";
import signature from "assets/signature.png"

const Footer = () => {
  return (
    <section className="stump">
        <center>
        <img src={signature} width={250} height={250} alt="Sus!?" />
        <div class="centered" style={{ "font-size": 24 }}>What do you think?<br /><br /><a href="https://react.dev/" className="textclick">MADE WITH REACT</a></div>
    </center>
        </section>

  );
};
export default Footer;