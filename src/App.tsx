import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-full">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
