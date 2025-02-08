import React from "react";
import commas from "../assets/images/quotes.jpg";
export const AboutPage = () => {
  return (
    <>
      <div className="About_main">
        <div className="abt_1st_child ">
          {/* <img src={commas} alt="Quotation Mark" class="quotation-img" /> */}
          <blockquote>
            <div className="moto_div">
              <h1>Our Motto</h1>
            </div>
            <div className="moto_contents">
              <h3>Where Art Sparks Connections</h3>
              <h3>passion meets pixels & creativity finds direction</h3>
              <h3>a hive of dreams, a shared collection</h3>
              <h3>Discover Create Inspire</h3>
            </div>
          </blockquote>
        </div>

        <div className="abt_2nd_child">
          <p>
            {" "}
            <i class="fas fa-quote-left fa-2x fa-pull-left"></i>
            "At ArtiumHive, we believe that art is a universal language that
            transcends boundaries and connects souls. Our mission is to create a
            vibrant platform where passion meets pixels, and creativity finds
            its true direction. We are dedicated to supporting local artists
            from around the world, providing them with a space to showcase their
            talents and share their unique stories. By bringing together
            creators and appreciators in one inclusive community, we aim to make
            art accessible to all and inspire connections that celebrate the
            beauty of human expression. Join us in this journey to discover,
            create, and inspire. Together, let's build a hive of dreams and a
            shared collection that resonates with art lovers everywhere".
          </p>
        </div>
      </div>
    </>
  );
};
