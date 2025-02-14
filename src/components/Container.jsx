import React from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { products, products_hinduism, products_nature } from "../Products"; // Adjust the import path as needed

const Container_div = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  margin-top: 0px;
  background-color: var(--background);
  @media only screen and (min-width: 800px) and (max-width: 1114px) {
    width: 70%;
    justify-self: center;
  }
  @media only screen and (min-width: 1115px) and (max-width: 2560px) {
    width: 69%;
    justify-self: center;
  }
  animation: container_anim 0.7s ease forwards;
  @keyframes container_anim {
    0% {
      opacity: 0;
      margin-top: 141px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Heading = styled.h1`
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Phonk Contrast DEMO";
  font-size: 2.5rem;
  justify-self: center;
  background-color: none;
`;

const CollectionHeading = styled.h2`
  text-align: center;
  margin: 40px 0 20px;
  padding-top: 90px;
  background-color: none;
  font-family: "BOLDE";
  font-size: 2.5rem;
  letter-spacing: 2.5px;
  color: var(--primary);
  @media only screen and (min-width: 800px) and (max-width: 2560px) {
    padding-top: 144px;
  }
`;

const ImageCard = styled.div`
  position: relative;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: var(--accent);
    transform: translateY(-2px);
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 4px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 4px;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  font-family: "BOLDE";
  font-size: 19px;
  letter-spacing: 1.5px;
`;

const BuyNow = styled.div`
  font-size: 18px;
  font-weight: bold;
  background: none;
  color: white;
  font-family: "Phonk Contrast DEMO";
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  position: sticky;
  top: 8%;
  border-radius: 4px;
  margin: 0;
  z-index: 3;
  @media (min-width: 800px) {
    width: initial;
    flex-direction: column;
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 15%;
    flex-direction: column;
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: 100vh;
    background: none;
    color: var(--text);
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;
  cursor: pointer;
  color: white;
  font-family: "Tanseek Modern Pro Arabic Book";
  background: transparent;

  @media (min-width: 800px) {
    margin: 10px 0;
    font-size: 18px;
    color: var(--text);
  }

  &:hover {
    color: var(--accent);
    cursor: pointer;
  }
`;
const LandingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
`;

const MainHeading = styled.h1`
  font-family: "Phonk Contrast DEMO", sans-serif;
  font-size: 4.5rem; /* Large font size for impact */
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.1em; /* Slightly spaced letters for modern look */
  background: none;
  @media (max-width: 768px) {
    font-size: 3rem; /* Smaller font size for mobile */
  }

  @media (max-width: 480px) {
    font-size: 2.5rem; /* Even smaller for very small screens */
  }
`;

const SubHeading = styled.h2`
  font-family: "Phonk Contrast DEMO", sans-serif;
  font-size: 2.5rem; /* Slightly smaller than the main heading */
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.8); /* Slightly transparent for contrast */
  background: none;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const MasonryGrid = ({ products }) => (
  <ResponsiveMasonry
    columnsCountBreakPoints={{ 440: 2, 800: 3, 1115: 5 }}
    gutterBreakpoints={{ 440: "0px", 800: "24px" }}
  >
    <Masonry
      columnsCountBreakPoints={{ 0: 2, 441: 3, 1115: 4 }} // Corrected breakpoints
      gutter="10px"
    >
      {products.map((product) => (
        <ImageCard key={product.id}>
          <Image src={product.image} alt={product.name} loading="lazy" />
          <Price>${product.price}</Price>
          <Overlay aria-hidden="true">
            <BuyNow>Buy Now</BuyNow>
          </Overlay>
        </ImageCard>
      ))}
    </Masonry>
  </ResponsiveMasonry>
);

export function Container() {
  const scrollToCollection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container_div>
      <LandingHeader>
        <MainHeading>COLLECT</MainHeading>
        <SubHeading>AND SELL</SubHeading>
        <MainHeading>DIGITAL ARTS</MainHeading>
        <SubHeading>AT YOUR OWN</SubHeading>
        <MainHeading>PRICE</MainHeading>
      </LandingHeader>

      <Navigation>
        <NavLink onClick={() => scrollToCollection("art")}>Art</NavLink>
        <NavLink onClick={() => scrollToCollection("hinduism")}>
          Hinduism
        </NavLink>
        <NavLink onClick={() => scrollToCollection("nature")}>Nature</NavLink>
      </Navigation>

      <CollectionHeading id="art">Art</CollectionHeading>
      <MasonryGrid products={products} />

      <CollectionHeading id="hinduism">Hinduism</CollectionHeading>
      <MasonryGrid products={products_hinduism} />

      <CollectionHeading id="nature">Nature</CollectionHeading>
      <MasonryGrid products={products_nature} />
    </Container_div>
  );
}
