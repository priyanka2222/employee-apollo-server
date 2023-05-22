import { ApolloClient, InMemoryCache } from '@apollo/client'


const one = new ApolloClient({
    uri:'http://localhost:4000/',
    cache: new InMemoryCache()
})
export default one;