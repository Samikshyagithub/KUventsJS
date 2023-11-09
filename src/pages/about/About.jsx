import React from "react";

import "./About.css";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="about">
      <img src={images.vert_icon} alt="logo" className="about__logo" />
      <p className="about__content">
        KUvents is a college event management system that aims to
        provide a comprehensive platform for colleges to organize, manage and
        promote their events. The platform aims to streamline the event
        management process by providing tools and features to effectively plan,
        coordinate, and execute events. With Event Hive, colleges can create
        events, manage registrations, and promote their events to a wider
        audience.
        <br />
        <br />
        KUvents is designed to be user-friendly, flexible, and customizable
        to meet the specific needs of different colleges. The platform enables
        colleges to manage multiple events simultaneously and provides real-time
        updates on event progress. By leveraging the latest technologies, Event
        Hive promises to deliver a seamless and engaging experience to both
        event organizers and attendees.
      </p>
      <h1 className="about__heading">
        About the{" "}
        <span
          style={{
            color: "#7848F4",
          }}
        >
          creators
        </span>
      </h1>
      <div className="about__creator">
        <img src={images.myself} alt="creator" />
        <div className="about__creator__info">
          <h1 className="about__creator__info__name">
            <span
              style={{
                color: "#7848F4",
              }}
            >
              Roshan
            </span>{" "}
            Sahani
          </h1>
          <p className="about__creator__info__content">
            Greetings from Roshan Sahani, the creator of this website! I
            extend a warm welcome to all our visitors and users. It brings me
            joy to see you here, and I hope you have a wonderful experience
            exploring our platform. As the creator, I am dedicated to providing
            you with the best possible service. If you have any questions,
            suggestions, or feedback, please don't hesitate to reach out. Your
            input is valuable to me, and I am committed to continuously
            improving the website to meet your needs. Thank you for choosing our
            platform. Enjoy your time here! <br />
            <br /> Best regards, <br /> Roshan Sahani
          </p>
          <div className="about__creator__info__links">
            <a
              href="https://www.linkedin.com/in/felix.hud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.linkedin} alt="event-hive" />
            </a>
            <a
              href="https://twitter.com/felix.hud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.twitter} alt="event-hive" />
            </a>
        
            <a
              href="https://www.figma.com/@prashantkumarr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.figma} alt="event-hive" />
            </a>
            <a
              href="https://medium.com/@officialprashanttt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.medium} alt="event-hive" />
            </a>
            <a
              href="https://github.com/felixop7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.github} alt="event-hive" />
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
