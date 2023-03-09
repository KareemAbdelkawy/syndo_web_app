import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Home></Home>}>  </Route>
  <Route path="/profile" element={<Profile></Profile>}>  </Route>
</Routes>
    </BrowserRouter>

  );
}

export default App;