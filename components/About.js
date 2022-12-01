import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";

const About = ({ cafe }) => {
  return (
    <section className="about section container" id="about">
      <div className="about__container">
        <div className="about__content grid">
          <div className="about__data">
            <span>HISTORY</span>
            <h1>ABOUT US</h1>
            <p>{cafe.welcomeTitle}</p>
            <PortableText value={cafe.aboutUs} />
            <a href="#experience" className="button about--button">
              Find more
            </a>
          </div>
          <div className="about__images">
            <Image src={urlFor(cafe.image).url()} layout="fill" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
