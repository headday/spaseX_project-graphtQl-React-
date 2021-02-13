import React from 'react'
import {Route} from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import { ApolloClient,ApolloProvider,InMemoryCache  } from '@apollo/client';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import logo from './logo.jpg'

const client = new ApolloClient({
  uri:"http://localhost:5000/graphql",
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img className="logo" 
          style=" display: block;
                  margin: 0 auto;
                  width: 400px;
                  height: 250px;
                  margin-top: 10px;" 
          src={logo} alt="logo"/>
          <Route exact path="/" component={Launches}/>
          <Route path="/launch/:id" component={Launch}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
