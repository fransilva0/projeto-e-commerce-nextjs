import React from "react";
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import config from "../config.json";
import styled from 'styled-components';
import { StyledQuantityOfProductsButton } from '../src/components/Button'

const StyledProductSection = styled.section`

  display: flex;
  justify-content: space-around;
  margin: 8rem 2rem 4rem 2rem;
  position: fixed;
  top: 0;

  img {
    width: 50%;
    margin-right: 1rem;
    border: 1px solid #fff;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({theme}) => theme.ColorTitle };
  }

  P {
    color: ${({theme}) => theme.ColorTitle };
  }

`;

const PriceViewer = styled.p`

  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${({theme}) => theme.ColorTitle };

`;

const SectionQuantityOfProducts = styled.div`

  display: flex;
  align-items: center;
  margin: 1rem 0 1rem 0;

`;

const QuantityOfProducts = styled.p`

margin: 0 0.5rem 0 0.5rem;
color: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};

`;

export default function ProductPage() {
  const [quantProduct, setQuantProduct] = React.useState(1);
  const router = useRouter()
  const productName = router.query.product
  const ProductListNames = Object.keys(config.productsList)

  return (
    <>
      {ProductListNames.map((ProductListNames) => {
        const produtos = config.productsList[ProductListNames]

        return (
          <StyledProductSection>
              {
                produtos.filter((produto) => {
                  const titleNormalized = produto.title;
                  const productActive = productName;
                  return titleNormalized == productActive
                }).map((produto) => {
                    const [productPriceViewer, setProductPriceViewer] = React.useState(produto.price)
                  return (
                    <>
                      <img src={produto.image} />
                        <div>
                          <h2>{produto.title}</h2>
                          <PriceViewer>{"R$ " + parseFloat(productPriceViewer).toFixed(2)}</PriceViewer>
                          <p>{produto.description}</p>
                          <SectionQuantityOfProducts>
                            <StyledQuantityOfProductsButton secondary onClick={() => {
                              if (quantProduct == 1) {
                                setQuantProduct(1)
                              } else {
                                setQuantProduct(quantProduct - 1);
                                setProductPriceViewer(productPriceViewer - produto.price)
                              }
                            }}>
                              <Icon icon="ant-design:arrow-left-outlined" />
                            </StyledQuantityOfProductsButton>
                            <QuantityOfProducts>{quantProduct}</QuantityOfProducts>
                            <StyledQuantityOfProductsButton secondary onClick={() => {
                              setQuantProduct(quantProduct + 1);
                              setProductPriceViewer(productPriceViewer + produto.price)
                            }}>
                            <Icon icon="ant-design:arrow-right-outlined" />
                            </StyledQuantityOfProductsButton>
                          </SectionQuantityOfProducts>
                        </div>
                    </>
                  )
                })
              }
          </StyledProductSection>
        )

      })}

    </>
  )
}
