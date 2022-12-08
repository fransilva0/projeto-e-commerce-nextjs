import { Icon } from '@iconify/react';
import styled from 'styled-components';

const Search = styled.div`
  position: relative;
  display: none;
  display: flex;
  justify-content: space-around;

  input {
    position: relative;
    display: none;
    flex: 1 1 auto;
    height: 44px;
    width: 25vw;
    padding-left: 16px;
    padding-right: 60px;
    border: 1px solid ${({theme}) => theme.light.lightBlue1 || "var(--cor-1)"};
    border-radius: 22px;
    outline: none;
    cursor: pointer;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 10px;
    translate: 0 -50%;
    z-index: 1;
    font-size: 20px;
    border-radius: 0;
    border: 0;
    padding: 0;
    color: ${({theme}) => theme.light.lightBlue1 || "var(--cor-1)"};
  }

  @media (width >= 500px) {
    display: block;
    input {
      display: block;
    }
  }

  @media (width >= 650px) {
    input {
      width: 240px;
    }
  }
`;

export function SearchBar({valorFiltro, setValorFiltro}) {

  const valorDaBusca = valorFiltro;
  const setValorDaBusca = setValorFiltro;

  return (
      <>
        <Search>
          <input type="text" placeholder="Pesquise" onChange={(event) => {
            setValorDaBusca(event.target.value);
          }} value={valorDaBusca} />
          <Icon className="icon" icon="simple-line-icons:magnifier" />
        </Search>
      </>
  )
}
