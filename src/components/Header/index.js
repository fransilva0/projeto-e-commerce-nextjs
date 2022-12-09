import { Icon } from '@iconify/react';
import { SearchBar } from '../SearchBar';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background: ${({theme}) => theme.mainStyles.backgroundBody || "#fff"};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  h1 {
    margin-left: 0.5rem;
    color: ${({theme}) => theme.ColorTitle};
  }

  span {
    color: var(--cor-1);
  }

`;

const SectionLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

`;

const ButtonLogin = styled.a`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid var(--cor-1);
  color: var(--cor-1);
  transition: all 300ms ease-out;

  &:hover {
    background: var(--cor-1);
    color: #fff;
  }
`;

export function Header({valorFiltro, setValorFiltro}) {
  return (
      <StyledHeader>
        <SectionLogo>
          <Icon color="#628FD9"  width="3rem" icon="ph:game-controller" />
          <a href="./index.html">
            <h1>Player<span>One</span></h1>
          </a>
        </SectionLogo>
        <SearchBar valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
        <div>
         <ButtonLogin  href="./pages/login.html">Login</ButtonLogin>
        </div>
      </StyledHeader>
  )
}
