import { PortableText } from "@portabletext/react";
import React from "react";

const VisitUs = ({ visitUs }) => {
  return (
    <section className="section visit" id="reserve">
      <div className="visit__container">
        <div className="visit__images">
          <img src="/img/visit.jpg" alt="" />
          <div className="visit__desc ">
            <span>{visitUs.title ?? ""}</span>
            <h1>{visitUs.subTitle ?? ""}</h1>
            <PortableText value={visitUs.description ?? ""} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
