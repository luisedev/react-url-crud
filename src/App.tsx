import React from 'react';
import Router from './routes/Router';



//@observer
function App(): JSX.Element {

  //The function returns a React Fragment with a form and all the registered URLS
  return (
    <Router></Router>
    
  );
}

export default App;
