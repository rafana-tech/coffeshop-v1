import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";

const Experience = ({ experience }) => {
  return (
    <section className="section experience" id="experience">
      <div className="experience__container">
        <div className="experience__content grid container">
          <div className="experience__images">
            <Image
              src={urlFor(experience.image).url()}
              layout="fill"
              alt="image"
            />
          </div>
          <div className="experience__data ">
            <span>EXPERIENCE</span>
            <h1>{experience.title}</h1>
            <p>{experience.italicTitle}</p>
            <PortableText value={experience.description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
