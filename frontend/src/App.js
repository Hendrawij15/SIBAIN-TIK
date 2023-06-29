import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dasboard from "./pages/Dasboard.js";
import Login from "./components/Login.js";
import Users from "./pages/Users.js";
import Jenis from "./pages/Jenis.js";
import Data from "./pages/Data.js";
import Peminjaman from "./pages/Peminjaman.js";
import { HelmetProvider } from "react-helmet-async";
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div className="app sidebar-mini ltr light-mode">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dasboard" element={<Dasboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/jenis" element={<Jenis />} />
            <Route path="/data" element={<Data />} />
            <Route path="/peminjaman" element={<Peminjaman />} />
          </Routes>
        </BrowserRouter>
        {AddLibrary("assets/js/jquery.min.js")}
        {AddLibrary("assets/plugins/bootstrap/js/popper.min.js")}
        {AddLibrary("assets/plugins/bootstrap/js/bootstrap.min.js")}
        {AddLibrary("assets/plugins/p-scroll/perfect-scrollbar.js")}
      </div>
    </HelmetProvider>
  );
}

export default App;
