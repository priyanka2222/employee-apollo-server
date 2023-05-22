import './App.css';
import Employees from './Components/Employees';
import { ApolloProvider, throwServerError } from '@apollo/client'
import one from './Clients/one'

function App() {
  return (
    <>
    <h3> Employee List </h3>
      <ApolloProvider client={one}>
          <Employees />
      </ApolloProvider>
    </>
  );
}

export default App;
