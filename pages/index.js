import { Header } from "../src/components/Header"
import { Banner } from "../src/components/Banner"
import { ProductList } from "../src/components/ProductList"
import config from "../config.json";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ProductList ProductsList={config.productsList} />
    </>
  )
}
