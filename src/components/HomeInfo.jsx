import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Justin</span> 👋
      <br />A full-stack Software Engineer.
    </h1>
  ),
  2: (
    <h1>
      <InfoBox
        text="I recently graduated from General Assembly's Software Engineering course and picked up many skills along the way"
        link="/about"
        btnText="Learn More"
      />
    </h1>
  ),
  3: (
    <h1>
      <InfoBox
        text="Some of my projects I have worked on in the past"
        link="/projects"
        btnText="Visit my portfolio"
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/contact"
        btnText="Let's have a chat"
      />
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
