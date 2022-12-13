import styled from 'styled-components';
import { useRouter } from 'next/router';

const SectionProducts = styled.section`
  margin: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 2rem;
    color: ${({theme}) => theme.ColorTitle };
  }

  button {
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
    transition: all 300ms ease-out;

    &:hover {
      color: ${({theme}) => theme.SecondaryColorBlue || "var(--cor-2)"};
      font-size: 1rem;
    }
  }

  ul {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding-right: 0.5rem;
  }

  img {
    width: 12rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
  }

  h3 {
    font-size: 0.8rem;
    margin: 0.5rem 0 0.5rem 0;
    color: ${({theme}) => theme.ColorTitle };
  }

  p {
    font-size: 0.7rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${({theme}) => theme.ColorTitle };
  }

`;

export function ProductList({searchValue, ...propriedades}) {
  const ProductListNames = Object.keys(propriedades.ProductsList)
  const router = useRouter()
  return (
    <>
      {ProductListNames.map((ProductListNames) => {
        const produtos = propriedades.ProductsList[ProductListNames]

        return (
          <SectionProducts key={ProductListNames}>
            <div>
              <h2>{ProductListNames}</h2>
              <a href="#">Mais Produtos &rarr;</a>
            </div>

            <ul>
              {
                produtos.filter((produto) => {
                  const titleNormalized = produto.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized)
                }).map((produto) => {
                  return (
                    <li key={produto.title}>
                      <img src={produto.image} />
                      <h3>{produto.title}</h3>
                      <p>{produto.price}</p>
                      <button onClick={() => {
                        router.push("/productPage")
                      }} >Ver produto</button>
                    </li>
                  )
                })
              }
            </ul>
          </SectionProducts>
        )

      })}

    </>
  )
}
