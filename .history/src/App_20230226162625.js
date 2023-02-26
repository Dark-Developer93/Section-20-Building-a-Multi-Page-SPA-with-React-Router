import { createBrowserRouter, Route, NavLink } from "react-router-dom";

import HomePage from "./pages/Home";

createBrowserRouter([{ path: "/", element: <HomePage /> }, {}]);

function App() {
  return <div></div>;
}

export default App;
