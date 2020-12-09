import Head from "next/head";
import Header from "./header";

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Upply: Manage Your Job Applications Like a Pro!</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 90vw;
          padding: 1rem;
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
          font-size: 14px;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        p {
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

export default Layout;
