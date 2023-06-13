import { BrowserRouter, Outlet } from "react-router-dom";
import RouterContainer from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}

export default App;
