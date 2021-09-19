import '../styles/globals.css'

import type { AppProps } from 'next/app'
import {Provider} from "next-auth/client";
import React, { useEffect } from 'react';
import {ApolloProvider} from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/layout";
import {useRouter} from "next/router";
import * as ga from '../lib/ga'
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            ga.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    },[router.events])

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