export function Header() {
  return (
    <>
      <header className="c-header">
        <div className="c-header__logo">
          <iconify-icon className="c-header__icon" icon="akar-icons:game-controller"></iconify-icon>
          <a href="./index.html">
            <h1 className="c-header__title">Player<span>One</span></h1>
          </a>
        </div>
        <div>
         <a  href="./pages/login.html" className="c-header__button-login">Login</a>
        </div>
      </header>

      <style jsx>{`
      .c-header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        background: #fff;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
      }

      .c-header__logo {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
      }

      .c-header__title {
        margin-left: 0.5rem;
        color: #000;
      }

      .c-header__title span {
        color: #628FD9;
      }

      .c-header__icon {
        color: #628FD9;
        font-size: 2rem;
      }

      .c-header__button-login {
        padding: 0.5rem 1rem;
        background: transparent;
        border: 2px solid #628FD9;
        color: #628FD9;
        transition: all 300ms ease-out;
      }

      .c-header__button-login:hover {
        background: #628FD9;
        color: #fff;
      }
    `}</style>
    </>
  )
}
