import { Tabs } from "components";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <header style={card}>

      <span style={{float:"left"}}>
        <Link to={"./"}><button style = {setabutton}>
            <text style={{ color: 'white', "letter-spacing":"6px", "font-family": "Tahoma", "font-size":"48px"}} >{"SETA"}</text>
            <text style={{ color: 'black', "letter-spacing": "1px", "font-family": "Tahoma", "font-size": "48px" }} >{" "}</text>
            <text style={{ color: 'black', "letter-spacing": "4px", "font-family": "Tahoma", "font-size": "52px", backgroundColor: 'rgba(255, 255, 255, 0.4)' }} >{" YOSHI "}</text>
        </button></Link>
      </span>
        
        <span style={{ float: "right" }}>
        <Link to="/"><button style={navbutton}><text style={{color:"white"}}>HOME</text></button></Link>
        
        <Link to="/about"><button style={navbutton}><text style={{ color: "white" }}>ABOUT</text></button></Link>
      </span>

    
      </header>
      <header style={cardflip}>
      <span style={{ float: "center" }}>
        <Tabs list={[
          { type: "smbx38a", text: "SMBX 38A", link: "/smbx38a" },
          { type: "smbx2",   text: "SMBX2",    link: "/smbx2" },
          { type: "music",   text: " SOON™",   link: "/secret" },
          // { type: "dsm",     text: "DSM5",     link: "/dsm" },
          { type: "health",  text: "HEALTH",   link: "/health" },
          { type: "other",   text: "OTHER",    link: "/other" },
        ]} />
      </span>
      </header>

    <Outlet />
    </>
  );
};


let setabutton = {
  "cursor": "pointer",
  "border": "1px solid transparent",
  "background-color": "transparent",
  // "height": "50px",
  // "width": "200px",
  "color": "transparent",
  // "font - size": "1.5em",
  // "box-shadow": "0 6px 6px rgba(0, 0, 0, 0.6)",
}

let navbutton = {
  "cursor": "pointer",
  "border": "1px solid transparent",
  "background-color": "transparent",
  // "height": "50px",
  // "width": "200px",
  "color": "transparent",
  // "font - size": "1.5em",
  // "box-shadow": "0 6px 6px rgba(0, 0, 0, 0.6)",
}

// const container = {
//   "max-width": "860px",
//   "margin": "0 auto",
// }

const card = {
  // "background-color": "rgba(0, 0, 0, 0.5)",
  "padding": "30px 20px 80px",
  "margin-top": "20px",
}

const cardflip = {
  // "background-color": "rgba(0, 0, 0, 0.5)",
  "padding": "30px 20px 40px",
  "margin-top": "0px",
}


export default Layout;