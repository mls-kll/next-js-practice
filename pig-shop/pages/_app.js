import '../styles/globals.css';
import Layout from '../src/components/Layout';
import { CartContextProvider } from '../src/context/cartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
