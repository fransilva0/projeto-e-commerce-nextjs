import styled from 'styled-components';

const SectionProducts = styled.section`
  margin: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    font-size: 0.9rem;
    color: ${({theme}) => theme.light.lightBlue1 || "var(--cor-1)"};
    transition: all 300ms ease-out;

    &:hover {
      color: ${({theme}) => theme.light.darkBlue1 || "var(--cor-2)"};
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
  }

  p {
    font-size: 0.7rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

`;

export function ProductList({searchValue, ...propriedades}) {
  const ProductListNames = Object.keys(propriedades.ProductsList)
  return (
    <>
      {ProductListNames.map((ProductListNames) => {
        const produtos = propriedades.ProductsList[ProductListNames]

        return (
          <SectionProducts>
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
                    <li>
                      <img src={produto.image} />
                      <h3>{produto.title}</h3>
                      <p>{produto.price}</p>
                      <a href={produto.url}>Ver produto</a>
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
