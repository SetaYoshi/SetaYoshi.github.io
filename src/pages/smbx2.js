import { Flip, TextClick } from "components";
import { useEffect } from "react"
import { Row, Col } from 'react-grid';

import logo from "assets/smbx2_logo.png"


const SMBX2 = () => {
  useEffect(() => {
    document.title = "SetaSMBX2"
  })

  return (<>
  <center>

  <section className="card" style={{ "display": "grid", "grid-template-columns": "auto auto auto" }}>
  <div><text style={{ "font-size": 30 }}><b>SMBX2</b></text></div><br /><br /><br /><section />

  <div style={{ "display": "grid", "grid-template-columns": "auto auto" }}>
    <div><img src={logo} width={560 / 2 + "px"} height={375 / 2 + "px"} alt="SMBX2 Logo" /></div>
    <div style={{ "display": "grid", "grid-template-rows": "auto auto" }}>
      <div>Super Mario Bros. X2 is an extension of the <TextClick link={"https://wohlsoft.ru/pgewiki/History_of_SMBX"}>original SMBX engine</TextClick>. A fangame that allows you to create your own levels and episodes with your very own custom content.</div>
      <div><pre><TextClick link={"https://codehaus.moe/downloads.php?"}>DOWNLOAD HERE</TextClick>   <TextClick link={"https://discord.gg/S2eAAy6"}>JOIN THE DISCORD SERVER!</TextClick></pre></div>
    </div>
  </div>
  </section><p />

  <section className="card">
    <h1>EPISODES</h1>
  </section><p />

<br/>

  <section className="card">
    <h1>LEVELS</h1>
  </section><p />

  <Row style={{width:"60%"}}>
  <Col>{MakeFlip("a_world_without_color")}</Col>
  <Col>{MakeFlip("plain_plain")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("glacier_glade")}</Col>
  <Col>{MakeFlip("bowser_castle")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("boing")}</Col>
  <Col>{MakeFlip("in_the_halls_of_the_hotel_king")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("my_eyes_shine_bright_with_the_city_lights")}</Col>
  <Col>{MakeFlip("redstone_test_world")}</Col>
  </Row>

  <section className="card">
    <h1>NPC PACK</h1>
  </section><p />

  <Row style={{width:"60%"}}>
  <Col>{MakeFlip("warphubs")}</Col>
  <Col>{MakeFlip("binoculars")}</Col>
  <Col>{MakeFlip("spyblocks")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("read_me_sign")}</Col>
  <Col>{MakeFlip("holes")}</Col>
  <Col>{MakeFlip("tesla_coils")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("handy_torch")}</Col>
  <Col>{MakeFlip("balloons")}</Col>
  <Col>{MakeFlip("amped_jewels")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("neckys")}</Col>
  <Col>{MakeFlip("boomshell_koopa")}</Col>
  <Col>{MakeFlip("button")}</Col>
  </Row><Row style={{width:"60%"}}>
  <Col>{MakeFlip("lever")}</Col>
  <Col>{MakeFlip("lectern")}</Col>
  </Row>

  <section className="card">
    <h1>SCRIPTS</h1>
  </section><p />

  <Row style={{ width: "60%" }}>
  <Col>{MakeFlip("redstone")}</Col>
  </Row>

  </center>
  </>)
};

function MakeFlip(link) {
  return <Flip type="smbx2" title={flips[link].title} desc={flips[link].desc} link={"/smbx2/" + link} linkText={"DOWNLOAD"}/>
}


const flips = {
  // EPISODES

  // "link": {
  //   title: "Title",
  //   desc: "AAA BBB CCC",
  // },


  // Levels

  "a_world_without_color": {
    title: "A World Without Color",
    desc: "",
  },

  "plain_plain": {
    title: "Plain Plain",
    desc: "",
  },

  "glacier_glade": {
    title: "Glacier Glade",
    desc: "",
  },

  "bowser_castle": {
    title: "Bowser's Castle",
    desc: "",
  },

  "boing": {
    title: "Boing",
    desc: "",
  },

  "in_the_halls_of_the_hotel_king": {
    title: "In the Halls of the Hotel King",
    desc: "",
  },

  "my_eyes_shine_bright_with_the_city_lights": {
    title: "My Eyes Shine Bright With the City Lights",
    desc: "",
  },

  "redstone_test_world": {
    title: "Redstone Test World",
    desc: "",
  },


  // NPC Pack

  "warphubs": {
    title: "Warphubs",
    desc: "",
  },

  "binoculars": {
    title: "Binoculars",
    desc: "",
  },

  "spyblocks": {
    title: "SpyBlocks",
    desc: "",
  },

  "read_me_sign": {
    title: "Read Me Sign",
    desc: "",
  },

  "holes": {
    title: "Holes",
    desc: "",
  },

  "tesla_coils": {
    title: "Tesla Coils",
    desc: "",
  },

  "handy_torch": {
    title: "Handy Torch",
    desc: "",
  },

  "balloons": {
    title: "Balloons",
    desc: "",
  },

  "amped_jewels": {
    title: "Amped Jewels",
    desc: "",
  },

  "neckys": {
    title: "Neckys",
    desc: "",
  },

  "boomshell_koopa": {
    title: "Boomshell Koopa",
    desc: "",
  },

  "button": {
    title: "Button",
    desc: "",
  },

  "lever": {
    title: "Lever",
    desc: "",
  },

  "lectern": {
    title: "Lectern",
    desc: "",
  },

  // Scripts

  "redstone": {
    title: "Redstone",
    desc: "",
  },

}


export default SMBX2;