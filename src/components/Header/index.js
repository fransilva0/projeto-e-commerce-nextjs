import { Icon } from '@iconify/react';
import { SearchBar } from '../SearchBar';
import styled from 'styled-components';
import DarkModeSwitch from './DarkModeSwitch';
import { StyledButton } from '../Button'

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

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 360px) and (max-width: 767px) {
      flex-direction: column;
    }
  }

`;

const SectionLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 0.5rem;
    flex-direction: column;
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
         <StyledButton secondary  href="#">Login</StyledButton>
         <DarkModeSwitch />
        </div>
      </StyledHeader>
  )
}
