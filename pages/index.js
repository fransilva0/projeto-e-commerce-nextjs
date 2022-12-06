import React from 'react';
import { Header } from "../src/components/Header"
import { Banner } from "../src/components/Banner"
import { ProductList } from "../src/components/ProductList"
import config from "../config.json";


export default function Home() {
  const [valorFiltro, setValorFiltro] = React.useState("");
  return (
    <>
      <Header valorFiltro={valorFiltro} setValorFiltro={setValorFiltro}/>
      <Banner />
      <ProductList searchValue={valorFiltro} ProductsList={config.productsList} />
    </>
  )
}
