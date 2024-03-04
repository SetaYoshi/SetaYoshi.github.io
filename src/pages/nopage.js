import { useEffect } from "react"

const NoPage = () => {
  useEffect(() => {
    document.title = "Seta is Missing :("
  })

  return (

  <center>
  <section className="card">
    <h2>404</h2>
    <h1>WHOOOOPS!</h1>
    No page found :(
    <br /><br /><br />
  </section>
  </center>
  );
};

export default NoPage;