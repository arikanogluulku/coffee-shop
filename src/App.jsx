import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Routes from './routes/routes';

const options = {
  timeout: 3000,
  position: positions.BOTTOM_RIGHT,
  transition: transitions.SCALE,
  containerStyle: {
    fontSize: '1.8rem',
  },
};

function App() {
  return (
    <Router>
      {/* alert provider */}
      <AlertProvider template={AlertTemplate} {...options}>
        <Routes />
      </AlertProvider>
    </Router>

  );
}

export default App;
