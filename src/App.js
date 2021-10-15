import React from 'react'
import routes from './routes'
import { useRoutes } from "react-router-dom";
import './static/fonts/font.css';
import './style/core.css';

function App() {
  const routing = useRoutes(routes);

  return (
    <div>
      {routing}
    </div>
  )
}

export default App
