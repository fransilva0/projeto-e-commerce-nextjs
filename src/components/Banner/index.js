import config from "../../../config.json"
import styled from 'styled-components';

const StyledBanner = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${config.imageBanner});
  height: 20rem;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  color: ${({theme}) => theme.mainStyles.white || "#fff"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background: ${({theme}) => theme.light.lightBlue1 || "var(--cor-1)"};
    border: 2px solid ${({theme}) => theme.light.lightBlue1 || "var(--cor-1)"};
    color: ${({theme}) => theme.mainStyles.white || "#fff"};
    transition: all 300ms ease-out;
    width: 10rem;

    &:hover {
      background: ${({theme}) => theme.light.darkBlue1 || "var(--cor-2)"};
      border-color: ${({theme}) => theme.light.darktBlue1 || "var(--cor-2)"};
    }
  }
`;

export function Banner() {
  return (
    <>
      <StyledBanner>
        <h2>Promoção de Aniversário</h2>
        <p>Todos os produtos com 20% de desconto</p>
        <button>Produtos</button>
      </StyledBanner>
    </>
  )
}
