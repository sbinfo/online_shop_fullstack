import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes";
import AppBar from "./components/AppBar";


function App() {
  return (
    <BrowserRouter>
        <AppBar />
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
