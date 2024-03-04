import { Flip } from "components";
import { useEffect } from "react"
import { Row, Col } from 'react-grid';

const flips = {

  "eggbot": {
    title: "Egg Bot",
    desc: "A template for building a Discord bot using Discordia, a lua library.",
    link: "https://github.com/SetaYoshi/egg-bot",
  },

  "mult": {
    title: "MulT",
    desc: "A WIP lua library that offer mathematical classes such as matrices, vectors, complex numbers, quaternions. colliders, and colors.",
    link: "https://github.com/SetaYoshi/MulT",
  },

  "astro": {
    title: "Astro",
    desc: "A WIP 2D platformer engine for LÖVE",
    link: "https://github.com/SetaYoshi/astro",
  },

  "matte": {
    title: "Matte",
    desc: "Maybe one day...",
    link: "https://www.theonion.com/study-finds-most-effective-method-of-overcoming-procras-1837669093",
  },
  
}


const OTHER = () => {
  useEffect(() => {
    document.title = "SetaOther"
  })

  return (
  <center>
  <section className="card">

    <h1>Other</h1>
    <p>other stuff goes here</p>

  </section><p />

  <Row style={{ width: "60%" }}>
  <Col>{MakeFlip("eggbot")}</Col>
  </Row><Row style={{ width: "60%" }}>
  <Col>{MakeFlip("mult")}</Col>
  </Row><Row style={{ width: "60%" }}>
  <Col>{MakeFlip("astro")}</Col>
  </Row><Row style={{ width: "60%" }}>
    <Col>{MakeFlip("matte")}</Col>
  </Row>

  </center>
  );
};


function MakeFlip(link) {
  return <Flip type="other" title={flips[link].title} desc={flips[link].desc} link={flips[link].link} linkText={"CHECK IT OUT"}/>
}


export default OTHER;