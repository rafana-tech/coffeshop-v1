import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../sanity";

const Menu = ({ menu, category, products }) => {
  const [selected, setSelected] = useState(null);
  const [product, setProduct] = useState(null);
  const toggleAccor = (i, title) => {
    if (selected === i) {
      return setSelected(null);
    } else {
      setProduct(products.filter((item) => item.category._ref === i));
      return setSelected(i);
    }
  };
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <section className="menu section" id="menu">
      <div className="menu__container grid container">
        <div className="menu__title">
          <span className="left">{menu.title}</span>
          <h1>{menu.subTitle}</h1>
          <PortableText value={menu.description} />
        </div>
        <div className="menu__group grid">
          {category.map((item) => (
            <div
              key={item._id}
              className={`menu__item ${
                selected === item._id ? "accordion-open" : ""
              } `}
            >
              <header
                className="menu__header"
                onClick={() => toggleAccor(item._id, item.title)}
              >
                <i className="ri-arrow-drop-down-line menu--icon"></i>
                <h3>{item.title}</h3>
              </header>
              <div
                className={`menu__content grid ${
                  selected === item._id ? "menu_open" : ""
                }`}
              >
                {products
                  ?.filter((la) => la.category._ref === item._id)
                  .map((men) => (
                    <div className="accordion" key={men._id}>
                      <div className="menu__images">
                        {/* <img src={men.image} alt="" /> */}
                        <Image
                          src={urlFor(men.image).url()}
                          alt="product"
                          width={150}
                          height={100}
                        />
                      </div>
                      <div className="menu__data">
                        <h3>{men.title}</h3>
                        <PortableText value={men.description} />
                      </div>
                      <span>{rupiah(men.price)}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
