import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";
const Footer = ({ cafe, gallery, social }) => {
  return (
    <footer className="footer section" id="footer">
      <div className="footer__container container">
        <div className="footer__content grid">
          <div className="footer__item">
            <h1>Address</h1>
            <PortableText value={cafe.address ?? ""} />
            <a
              href="https://goo.gl/maps/nuG9w712PqBoM5xm6"
              className=" button about--button mt-3"
            >
              Google Maps
            </a>
          </div>
          <div className="footer__item">
            <h1>Reservation</h1>
            <p>
              {cafe.phoneNumber ?? 0}
              <br />
              {cafe.email ?? ""}
            </p>
          </div>
          <div className="footer__item">
            <h1>Open Hours</h1>
            {cafe.openHours.map((item, i) => (
              <p key={i} style={{ marginBottom: "5px" }}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="footer__social ">
          <ul className="footer__list">
            {social.map((item) => (
              <li className="footer-link" key={item._id}>
                <SocialIcon url={item.url} />
              </li>
            ))}
          </ul>
          <div className="footer__copyright">
            <p>
              2022 © DINA . DESIGNED BY <span>TECHLAND</span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__gallery">
        <div className="gallery__content grid">
          {gallery[0].images.map((item, i) => (
            <div className="gallery__item" key={i}>
              <Image
                src={urlFor(item).url()}
                width={300}
                height={300}
                layout="responsive"
                objectFit="cover"
                alt="gallery"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
