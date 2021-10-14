import React from 'react'
import routes from './routes'
import { useRoutes } from "react-router-dom";
import './static/fonts/font.css';

function App() {
  const routing = useRoutes(routes);

  return (
    <div>
      {routing}
    </div>
  )
}

export default App
