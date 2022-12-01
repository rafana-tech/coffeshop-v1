import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";

const Service = ({ service }) => {
  return (
    <section className="service">
      <div className="service__container container">
        <div className="service__content grid">
          {service.map((item) => (
            <div className="service__item" key={item._id}>
              <div className="service__images" style={{ position: "relative" }}>
                <Image
                  src={urlFor(item.background).url() ?? ""}
                  alt=""
                  width="80"
                  height={"80"}
                />
              </div>
              <div className="service__data">
                <h3>{item.title ?? ""}</h3>
                <PortableText value={item.description ?? ""} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
