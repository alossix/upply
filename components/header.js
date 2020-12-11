import Link from "next/link";

function Header({ user, loading }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <div className="header-left-container">
              <Link href="/">
                <a>
                  <img className="logo" src="/jobhunt.png"></img>
                </a>
              </Link>
              <Link href="/">
                <a className="upply">Upply</a>
              </Link>
            </div>
          </li>
          {!loading &&
            (user ? (
              <>
                <li>
                  <Link href="/user">
                    <a className="app-stack">See Your Application Stack</a>
                  </Link>
                </li>
                <Link href="/api/logout">
                  <a>
                    <button>Logout</button>
                  </a>
                </Link>
              </>
            ) : (
              <Link href="/api/login">
                <a>
                  <button>Log In or Sign Up</button>
                </a>
              </Link>
            ))}
        </ul>
      </nav>

      <style jsx>{`
        header {
          color: #000;
          background-color: #fff;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 9px;
        }
        nav {
          max-width: 90vw;
          margin: auto;
        }
        ul {
          display: flex;
          list-style: none;
          justify-content: space-between;
        }
        .logo {
          width: 42px;
          margin-right: 1rem;
          padding-top: 5px;
        }
        .header-left-container {
          display: flex;
          align-items: center;
        }
        h1 {
          font-size: 2rem;
          font-weight: 900;
        }
        li {
          margin-right: 1rem;
          font-size: 14px;
        }
        li:nth-child(2) {
          margin-right: auto;
        }
        a {
          color: #000;
          text-decoration: none;
        }
        .upply {
          font-weight: 900;
          font-size: 3rem;
        }
        button {
          font-weight: bold;
          color: #fff;
          font-size: 1.2rem;
          background-color: #000;
          padding: 0.8rem 1.6rem;
          margin: 0.5rem 0rem;
          cursor: pointer;
          border: 3px solid black;
          border-radius: 15px;
        }
        button:hover {
          color: #000;
          background-color: #fff;
        }
        .app-stack {
          padding-left: 5rem;
          font-size: 1.2rem;
        }
      `}</style>
    </header>
  );
}

export default Header;
