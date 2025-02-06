import { Main1 } from "./main1";
import { products } from "../Products";
import { Header } from "./header";

export function Container() {
  return (
    <>
      <Header />
      <div className="collection_header_div">
        <div className="collection_header">
          <h1>Curated Collections</h1>
        </div>
        <div id="main1-parent">
          <Main1 data={products} />
        </div>
      </div>
    </>
  );
}
