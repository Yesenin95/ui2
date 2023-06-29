'use client'

import Providers from "./Providers";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface AppProps {
   Component: React.ComponentType<any>;
   pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Providers>
            <Navbar />
            <div>{Component && <Component {...pageProps} />}</div>
            <Footer />
         </Providers>
      </>
   );
}

export default MyApp;

