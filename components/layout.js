import Head from "next/head";
import Header from "./header";

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Upply: Manage Your Job Applications Like a Pro!</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 90vw;
          padding: 1rem 0rem;
          margin: auto;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          font-size: 10px;
        }
        body {
          font-family: "Nunito Sans", sans-serif;
        }
        p {
          font-size: 1.5rem;
        }
        li {
          font-size: 1.5rem;
        }
        label {
          font-size: 1.5rem;
        }
        button {
          font-family: "Nunito Sans", sans-serif;
          cursor: pointer;
        }
        input,
        textarea {
          outline: none;
          font-family: "Nunito Sans", sans-serif;
        }
      `}</style>
    </>
  );
}

export default Layout;
