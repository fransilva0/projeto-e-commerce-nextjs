export function Banner() {
  return (
    <>
      <section className="c-banner">
        <h2>Promoção de Aniversário</h2>
        <p>Todos os produtos com 20% de desconto</p>
        <button className="c-banner__button">Produtos</button>
      </section>

      <style jsx>{`
        .c-banner {
          background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1509366812838-b768dc7a8b3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
          height: 20rem;
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: cover;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
        }

        .c-banner h2, .c-banner p {
          margin-bottom: 2rem;
        }

        .c-banner h2 {
          font-size: 2rem;
        }

        .c-banner p {
          font-size: 1rem;
        }

        .c-banner__button {
          padding: 0.5rem 1rem;
          background: var(--cor-1);
          border: 2px solid var(--cor-1);
          color: #fff;
          transition: all 300ms ease-out;
          width: 10rem;
        }

        .c-banner__button:hover {
          background: var(--cor-2);
          border-color: var(--cor-2);
        }
      `}</style>
    </>
  )
}
