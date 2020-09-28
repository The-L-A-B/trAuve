//React Components and Hooks
import React from 'react';
//Styles
import CssBaseline from '@material-ui/core/CssBaseline';
//Custom Components
import Routes from './Routes';
import Header from './components/Header';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <div>
      <CssBaseline />
      <Routes />
    </div>
  );
}

export default App;
