import '../styles/globals.css'

import type { AppProps } from 'next/app'
import {Provider} from "next-auth/client";
import React from 'react';
import {ApolloProvider} from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
          <Layout>
              <Provider session={pageProps.session}>
                  <Component {...pageProps}/>
              </Provider>
          </Layout>
      </ApolloProvider>
        )
}


export default MyApp