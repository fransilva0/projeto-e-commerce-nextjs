import config from "../../../config.json"
import styled from 'styled-components';
import { StyledButton } from '../Button'

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
`;

export function Banner() {
  return (
    <>
      <StyledBanner>
        <h2>Promoção de Aniversário</h2>
        <p>Todos os produtos com 20% de desconto</p>
        <StyledButton>Produtos</StyledButton>
      </StyledBanner>
    </>
  )
}
