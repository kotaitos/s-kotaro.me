import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        primary: '#4ADE7B',
        secondary: '#F9CB80',
        error: '#FCC5D8',
      },
    }
  })

  return (
    <ApolloProvider client={client}>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </ApolloProvider>
  )
}
