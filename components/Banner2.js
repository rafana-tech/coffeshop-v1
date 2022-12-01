import { PortableText } from "@portabletext/react";
import React from "react";
import { urlFor } from "../sanity";

const Banner2 = ({ banner }) => {
  return (
    <section
      className="banner section  "
      style={{ backgroundImage: `url(${urlFor(banner.background)})` }}
    >
      <div className="banner__data ">
        <h3>{banner.title ?? ""}</h3>
        <PortableText value={banner.description} />
      </div>
    </section>
  );
};

export default Banner2;
