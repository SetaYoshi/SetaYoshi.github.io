import { Flip, TextClick } from "components";
import { useEffect } from "react"
import { Row, Col } from 'react-grid';

import logo from "assets/smbx38a_logo.png"


const SMBX38A = () => {
  useEffect(() => {
    document.title = "SetaSMBX38A"
  })

  return (<>
  <center>
       
  <section className="card" style={{ "display": "grid", "grid-template-columns": "auto auto auto"}}>
  <div><text style={{"font-size": 30}}><b>SMBX 38A</b></text></div><br /><br /><br /><section/>

  <div style={{ "display": "grid", "grid-template-columns": "auto auto"}}>
    <div><img src={logo} width={128 + "px"} height={128 + "px"} alt="SMBX 38A Logo" /></div>
    <div style={{ "display": "grid", "grid-template-rows": "auto auto"}}>
        <div>Super Mario Bros. X 38A is a recreation of the <TextClick link={"https://wohlsoft.ru/pgewiki/History_of_SMBX"}>original SMBX engine</TextClick>. A fangame that allows you to create your own levels and episodes with your very own custom content.</div>
        <div><pre><TextClick link={"https://www.dropbox.com/s/u624gjlmpx7rpt5/SMBX38A.zip?dl=0"}>DOWNLOAD HERE!</TextClick>   <TextClick link={"https://discord.gg/CWeeZmEbgu"}>JOIN THE DISCORD SERVER!</TextClick></pre></div>
    </div>
  </div>
  </section><p/>
  
  <section className="card">
    <h1>EPISODES</h1>
  </section><p/>

  <Row style={{width:"60%"}}>
  <Col>{MakeFlip("xyz")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("the_great_smbx_38a_contest_i")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("the_great_smbx_38a_contest_ii")}</Col>
  </Row>
  
  <section className="card">
    <h1>LEVELS</h1>
  </section><p/>

  <Row style={{width:"60%"}}>
  <Col>{MakeFlip("cloudy_mountains")}</Col>
  <Col>{MakeFlip("existential_crisis")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("ying_yang")}</Col>
  </Row>
  
  <section className="card">
    <h1>SCRIPTS</h1>
  </section><p/>

  <Row style={{width:"60%"}}>
  <Col>{MakeFlip("parrallaxx")}</Col>
  <Col>{MakeFlip("custom_cheats")}</Col>
  <Col>{MakeFlip("custom_credits")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("faded_blocks")}</Col>
  <Col>{MakeFlip("color")}</Col>
  </Row>
  
  </center>
  </>);
};


function MakeFlip(link) {
  return <Flip type="smbx38a" title={flips[link].title} desc={flips[link].desc} link={"/smbx38a/" + link} linkText={"DOWNLOAD"}/>
}


const flips = {
  // EPISODES

  "xyz": {
    title: "XYZ",
    desc: "It's XYZ Time",
  },

  "the_great_smbx_38a_contest_i": {
    title: "The Great SMBX 38A Contest I",
    desc: "TBA",
  },

  "the_great_smbx_38a_contest_ii": {
    title: "The Great SMBX 38A Contest II",
    desc: "TBA",
  },


  // Levels

  "cloudy_mountains": {
    title: "Cloudy Mountains",
    desc: "TBA",
  },

  "existential_crisis": {
    title: "Existential Crisis",
    desc: "TBA",
  },

  "ying_yang": {
    title: "Ying Yang",
    desc: "TBA",
  },


  // Scripts

  "parrallaxx": {
    title: "Parrallaxx",
    desc: "Add layered backgrounds into your levels with an easy to use config system",
  },

  "custom_cheats": {
    title: "Custom Cheats",
    desc: "Create custom cheats tfor your levels",
  },

  "custom_credits": {
    title: "Custom Credits",
    desc: "A simple and easy to use credits generator.",
  },

  "faded_blocks": {
    title: "Faded Blocks",
    desc: "Group blocks together which all begin to fade away when stepped on. As seen in XYZ",
  },

  "color": {
    title: "Color",
    desc: "Easily create, operate, blend, and manage colors.",
  },

}

export default SMBX38A;