import { Main1 } from "./main1";
import { products } from "../Products";
import { Header } from "./header";

export function Container() {
  return (
    <>
      <Header />

      <div id="main1-parent">
        <Main1 data={products} />
      </div>
    </>
  );
}
