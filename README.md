<div align='center' id='top'>
<img src='./.github/app.png' alt='app_name' />

&#xa0;

<!-- <a href='linkdosite'>Demo</a> -->

</div>

<h1 align='center'>Player One - E-commerce </h1>

<p align='center'>

<img alt='Principal linguagem do projeto' src='https://img.shields.io/github/languages/top/fransilva0/projeto-e-commerce-nextjs?color=56BEB8'>

<img alt='Quantidade de linguagens utilizadas' src='https://img.shields.io/github/languages/count/fransilva0/projeto-e-commerce-nextjs?color=56BEB8'>

<img alt='Tamanho do repositório' src='https://img.shields.io/github/repo-size/fransilva0/projeto-e-commerce-nextjs?color=56BEB8'>

<img alt='Licença' src='https://img.shields.io/github/license/fransilva0/projeto-e-commerce-nextjs?color=56BEB8'>

<!-- <img alt='Github issues' src='https://img.shields.io/github/issues/{{github}}/{{repository}}?color=56BEB8' /> -->

<!-- <img alt='Github forks' src='https://img.shields.io/github/forks/{{github}}/{{repository}}?color=56BEB8' /> -->

<!-- <img alt='Github stars' src='https://img.shields.io/github/stars/{{github}}/{{repository}}?color=56BEB8' /> -->
</p>

<!-- Status -->

<h4 align='center'>🚧  Player One 🚀 Em construção...  🚧 </h4>

<p align='center'>
<a href='#dart-sobre'>Sobre</a> &#xa0; | &#xa0;
<a href='#sparkles-funcionalidades'>Funcionalidades</a> &#xa0; | &#xa0;
<a href='#rocket-tecnologias'>Tecnologias</a> &#xa0; | &#xa0;
<a href='#white_check_mark-pré-requesitos'>Pré requisitos</a> &#xa0; | &#xa0;
<a href='#checkered_flag-começando'>Começando</a> &#xa0; | &#xa0;
<a href='#memo-licença'>Licença</a> &#xa0; | &#xa0;
<a href='https://github.com/fransilva0' target='_blank'>Autor</a> &#xa0; | &#xa0;
</p>

<br>

## :dart: Sobre ##

<p>
  O Projeto Player One veio como um desafio simples do Programa One no qual seria uma tela simples inicial em HTML, CSS e JavaScript. Contudo, decidi seguir com a ideia do projeto e desenvolver mais profundamente o e-commerce, usando tecnologias como React.js, Next.js.
</p>

<p>
  Para estilizar os componentes do projeto optei por começar a aprender e desenvolver conhecimentos no styled-components no qual percebi uma certa facilidade de utilização no projeto. Já a lista de produtos eu utilizei o Json para armazenar os dados de imagem, nome do produto, preço e link para a página do produto que está planejado para ser desenvolvido posteriormente.
</p>

<p>
  Os dados dos produtos no Json foram manipulados usando a função map no arquivo index.js dentro da pasta do componente ProductList, sendo esse componente renderiza todas as listas que estão na tela inicial e são iguais em estilização também. Os ícones presentes nesse projeto foram pegos do site <a href="https://iconify.design/">Iconify</a>, sendo todos com licença MIT assim como o projeto.
</p>

<p>
  Para fazer a barra de pesquisa por produtos funcionar eu fiz um filter para a filtragem dos produtos no componente ProductList responsável pelos cards de produtos. Além disso, no componente SearchBar eu precisei cuidar de pegar o valor digitado pelo usuário, esse valor ficava armazenado no index.js que está dentro da pasta de pages de forma global no projeto, para que eu pudesse passar o que foi digitado pelo usuário para onde isso seria necessário, no caso do input da barra de pesquisa para o filter na lista de produtos.
</p>

<p>
  Durante o processo descrito no parágrafo anterior eu utilizei o conceito de Prop drilling, que é um estágio do desenvolvimento que acontece quando precisamos obter dados que estão em várias camadas na árvore de componente react. Já que o useState() foi colocado na página de index.js e precisou descer "perfurando" o componente de Header até chegar no componente SearchBar.
</p>

## :sparkles: Funcionalidades ##

- [ ] Modo escuro na página;
- [ ] Popup de politica de cookies;
- [ ] Tela de login funcional;
- [ ] Página de perfil de usuário;
- [X] Barra de pesquisa de produtos funcional;
- [ ] Tela de compra de produtos;
- [ ] Carrinho de compras funcional;
- [ ] Separação de Produtos por categorias;

## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Styled-jsx](https://github.com/vercel/styled-jsx)
- [Json](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON)

## :white_check_mark: Pré requisitos ##

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados em sua maquina.

## :checkered_flag: Começando ##

```bash
# Clone este repositório
$ git clone https://github.com/fransilva0/projeto-e-commerce-nextjs

# Entre na pasta
$ cd projeto-e-commerce-nextjs

# Instale as dependências
$ yarn

# Para iniciar o projeto
$ yarn start

# O app vai inicializar em <http://localhost:3000>
```

## :memo: Licença ##

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


Feito com :heart: por <a href='https://github.com/fransilva0' target='_blank'>Francileudo Oliveira</a>

&#xa0;

<a href='#top'>Voltar para o topo</a>
