import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  // return (
  //   <h1>Hello. This is the first time I am attepmting a challenge on REACT</h1>
  // );

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Akorede.jpg" alt="Akorede Mohammed" />;
}

function Intro() {
  return (
    <div>
      <h1>AKOREDE MOHAMMED</h1>
      <p>
        Frontend developer and teacher at Teresa Basic and High School. A
        student at University of Lagos, Petroleum and Gas Engineering
        department. I like to play games/watch movies when I want to unwind or
        just having a nice time outside enjoying the view of God's creation.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🙂" bg="#44fef4" />
      <Skill skill="JavaScript" emoji="😋" bg="#cbcdef" />
      <Skill skill="CSS" emoji="😁" bg="#bdeff3" />
      <Skill skill="HTML" emoji="😅" bg="#ffe121" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bg }}>
      <span>
        {props.skill} {props.emoji}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
