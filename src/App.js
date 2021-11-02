import React from 'react';

import './css/App.scss';
import ReactRouterSetup from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
      <section>
        <ReactRouterSetup />
      </section>
    </div>
  );
}

export default App;
