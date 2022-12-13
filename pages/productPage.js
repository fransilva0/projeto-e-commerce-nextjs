import React from "react";
import { useRouter } from 'next/router';
import config from "../config.json";
import styled from 'styled-components';

const StyledProductSection = styled.section`

  display: flex;
  justify-content: space-around;
  margin: 8rem 2rem 4rem 2rem;

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

export default function ProductPage() {
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
                  return (
                    <>
                      <img src={produto.image} />
                        <div>
                          <h2>{produto.title}</h2>
                          <PriceViewer>{produto.price}</PriceViewer>
                          <p>{produto.description}</p>
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
