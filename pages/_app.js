import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

const link = createHttpLink({
  uri: 'http://localhost:4000/',
  credentials: 'include'
})

const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link
})
function MyApp({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
    )

  
}

export default MyApp
