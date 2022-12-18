import { Icon } from '@iconify/react';
import styled from 'styled-components';

const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;

  input {
    position: relative;
    flex: 1 1 auto;
    height: 44px;
    width: 25vw;
    padding-left: 16px;
    padding-right: 60px;
    border: 1px solid ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
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
    color: ${({theme}) => theme.PrimaryColorBlue || "var(--cor-1)"};
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
