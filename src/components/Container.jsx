import { Main1 } from "./main1";
import { products, products_nature, products_hinduism } from "../Products";
import { Header } from "./header";
import { CollectionNature } from "./collectionNature";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CollectionHinduism } from "./collectionHinduism";

export function Container() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1)); // Remove the `#`
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <div className="collection_header_div">
        <div id="main1-parent">
          <div id="collection_nav">
            <ul>
              <li>
                <Link to="#hindu_collection_scroll_to">Hinduism</Link>
              </li>
              <li>
                <Link to="#nature_collection_scroll_to">Nature</Link>
              </li>
              <li>
                <Link to="#art_collection_scroll_to">Art</Link>
              </li>
            </ul>
          </div>

          <div
            id="hindu_collection_scroll_to"
            style={{ background: "none", height: "10em" }}
          ></div>
          <div id="hindu_collection">
            <div>
              <h1 id="hindu_collection_header">Hinduism</h1>
            </div>
            <div className="collection_div">
              <CollectionNature data={products_hinduism} />
            </div>
          </div>

          <div
            id="nature_collection_scroll_to"
            style={{ background: "none", height: "10em" }}
          ></div>
          <div id="nature_collection">
            <div>
              <h1 id="nature_collection_header">Nature</h1>
            </div>
            <div className="collection_div">
              <Main1 data={products_nature} />
            </div>
          </div>

          <div
            id="art_collection_scroll_to"
            style={{ background: "none", height: "10em" }}
          ></div>
          <div id="art_collection">
            <div>
              <h1 id="art_collection_header">Art</h1>
            </div>
            <div className="collection_div">
              <CollectionHinduism data={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
