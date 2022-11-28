import "./landing.css";

export default function Landing() {
  // function Container1() {
  //   <div className="container" id="container1"></div>;
  // }
  // function Container2() {
  //   <div className="container" id="container2">
  //     container 2
  //   </div>;
  // }

  return (
    <main className="landing">
      <div className="container" id="container1">
        <h1>Give Up</h1>
        <p>It's too late to find Love</p>
        <h1>Love</h1>
        <p>Let's do the finding for you</p>
        <button className="get-started">Get Started</button>
      </div>
      <div className="container" id="container2">
        container 2
      </div>
    </main>
  );
}
