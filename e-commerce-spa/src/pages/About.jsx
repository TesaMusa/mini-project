import Products from "../components/Products";
function About() {
  return (
    <div>
      <h1 className="about">About Us</h1>
      <div className="names">
        <div>
          <h2>Rui</h2>
          <p>CSS did not give him enough time to write about himself</p>
        </div>
        <div>
          <h2>Tesa</h2>
          <p>If she were the genius behind a programming language,
            <br/> she’d probably name it after a feline friend,
            <br/>  echoing her love for CATS in the world of technology</p>
        </div>
        <div className="ari">
          <h2>Ari</h2>
          <p>Out in the world  to add one more step to his glorious career path from artist, carpenter, teacher, Jiu-Jitsu Fighter, again artist, carpenter, bookdealer and…….Webdev??!!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
