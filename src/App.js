import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
    </BrowserRouter>
  );
}

export default App;
