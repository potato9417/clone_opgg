import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Champion from "./routes/Champion"
import Nav from "./components/Nav"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/champion" component={Champion} />
    </BrowserRouter>
  );
}

export default App;
