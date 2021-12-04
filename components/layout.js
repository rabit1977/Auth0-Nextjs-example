import Head from 'next/head';
import Header from './header';

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className='container'>{children}</div>
      </main>

      <style jsx>{`
        .container {
          padding: 3rem;
          background-color: #444;
          max-width: 42rem;
          margin: 1.5rem auto;
          border-radius: 2rem;
        } 
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
       
      `}</style>
    </>
  );
}

export default Layout;
