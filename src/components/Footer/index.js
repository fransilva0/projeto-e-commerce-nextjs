import styled from 'styled-components';
import { Icon } from '@iconify/react';

const SectionFooterTop = styled.footer`
  background: var(--cor-3);
  align-items: flex-start;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
`;

const SectionFooterLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  h1 {
    margin-left: 0.5rem;
    color: #000;
  }

  span {
    color: var(--cor-1);
  }
`;

const MenuLinks = styled.ul`
  li {
    padding: 0.5rem;
  }

  a {
    color: var(--cor-1);
    font-size: 0.8rem;
    transition: all 300ms ease-out;

    &:hover {
      color: var(--cor-2);
    }
  }
`;

const FooterForm = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: #fff;
    font-family: var(--font-1);
  }

  input {
    display: block;
    width: 100%;
    padding: 15px 0 15px 8px;
    border: none;
    background-color: #fff;
    outline: none;
    font-family: var(--font-1);
  }

  textarea {
    display: block;
    width: 99%;
    height: 100px;
    padding: 8px;
    border: none;
    background-color: #fff;
    outline: none;
    resize: none;
    font-family: var(--font-1);
  }

  button {
    padding: 0.5rem 1rem;
    background: transparent;
    border: 2px solid var(--cor-1);
    color: var(--cor-1);
    transition: all 300ms ease-out;

    &:hover {
      background: var(--cor-1);
      color: #fff;
    }
  }

`;

const SectionFooterBottom = styled.div`
  padding: 2rem;
  text-align: center;
`;

export function Footer() {
  return (
    <footer>
    <SectionFooterTop>
      <SectionFooterLogo>
        <Icon color="#628FD9"  width="3rem" icon="ph:game-controller" />
        <a href="/">
          <h1>Player<span>One</span></h1>
        </a>
      </SectionFooterLogo>
      <MenuLinks>
        <li>
          <a href="#">Quem somos nós</a>
        </li>
        <li>
          <a href="#">Política de privacidade</a>
        </li>
        <li>
          <a href="#">Programa fidelidade</a>
        </li>
        <li>
          <a href="#">Nossas lojas</a>
        </li>
        <li>
          <a href="#">Quero ser franqueado</a>
        </li>
        <li>
          <a href="#">Anuncie aqui</a>
        </li>
      </MenuLinks>
      <FooterForm>
        <h3>Fale conosco</h3>

        <form action="submit">
          <label>
            <input type="text" name="Nome" placeholder="Seu nome" required />
          </label>

          <label>
            <input
              type="email"
              name="Email"
              placeholder="seuemail@email.com"
              required
            />
          </label>

          <label>
            <textarea
              name="Mensagem"
              placeholder="Deixe sua mensagem"
              required
            ></textarea>
          </label>

          <button type="submit">Enviar mensagem</button>
        </form>
      </FooterForm>
    </SectionFooterTop>
    <SectionFooterBottom>
      <p>Desenvolvido por Francileudo Oliveira | 2022</p>
    </SectionFooterBottom>
  </footer>
  )
}
