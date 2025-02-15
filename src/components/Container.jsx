import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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
  @media only screen and (min-width: 1115px) and (max-width: 2560px) {
    font-size: 23px;
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const popUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const SkeletonImageCard = styled.div`
  position: relative;
  margin: 10px;
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  height: 200px; /* Adjust height as needed */
  width: 100%; /* Ensure it takes up full width */
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SkeletonPrice = styled.div`
  margin-top: 10px;
  background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
  background-size: 200% 100%;
  height: 20px; /* Adjust height as needed */
  width: 100%; /* Adjust width as needed */
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
`;

const AnimatedImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 4px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
`;

const AnimatedPrice = styled.div`
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
  opacity: 0;
  animation: ${popUp} 0.5s ease forwards;
`;

const SkeletonMasonryGrid = () => (
  <ResponsiveMasonry
    columnsCountBreakPoints={{ 440: 2, 800: 3, 1115: 5 }}
    gutterBreakpoints={{ 440: "0px", 800: "24px" }}
  >
    <Masonry columnsCountBreakPoints={{ 0: 2, 441: 3, 1115: 4 }} gutter="10px">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} style={{ width: "100%", justifyItems: "center" }}>
          <SkeletonImageCard />
          <SkeletonPrice />
        </div>
      ))}
    </Masonry>
  </ResponsiveMasonry>
);

const MasonryGrid = ({ products, isLoading }) => (
  <ResponsiveMasonry
    columnsCountBreakPoints={{ 440: 2, 800: 3, 1115: 5 }}
    gutterBreakpoints={{ 440: "0px", 800: "24px" }}
  >
    <Masonry columnsCountBreakPoints={{ 0: 2, 441: 3, 1115: 4 }} gutter="10px">
      {products.map((product, index) => (
        <ImageCard key={product.id}>
          {!isLoading && (
            <>
              <AnimatedImage
                src={product.image}
                alt={product.name}
                loading="lazy"
                style={{ animationDelay: `${index * 0.1}s` }} // Sequential delay
              />
              <AnimatedPrice
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                ${product.price}
              </AnimatedPrice>
              <Overlay aria-hidden="true">
                <BuyNow>Buy Now</BuyNow>
              </Overlay>
            </>
          )}
        </ImageCard>
      ))}
    </Masonry>
  </ResponsiveMasonry>
);

export function Container() {
  const [isArtLoading, setIsArtLoading] = useState(true);
  const [isHinduismLoading, setIsHinduismLoading] = useState(true);
  const [isNatureLoading, setIsNatureLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsArtLoading(false);
      setIsHinduismLoading(false);
    }, 3000);

    setTimeout(() => {
      setIsNatureLoading(false);
    }, 4000);
  }, []);

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
      {isArtLoading ? (
        <SkeletonMasonryGrid />
      ) : (
        <MasonryGrid products={products} isLoading={isArtLoading} />
      )}

      <CollectionHeading id="hinduism">Hinduism</CollectionHeading>
      {isHinduismLoading ? (
        <SkeletonMasonryGrid />
      ) : (
        <MasonryGrid
          products={products_hinduism}
          isLoading={isHinduismLoading}
        />
      )}

      <CollectionHeading id="nature">Nature</CollectionHeading>
      {isNatureLoading ? (
        <SkeletonMasonryGrid />
      ) : (
        <MasonryGrid products={products_nature} isLoading={isNatureLoading} />
      )}
    </Container_div>
  );
}
