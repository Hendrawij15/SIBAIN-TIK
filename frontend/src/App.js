import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dasboard from "./pages/Dasboard.js";
import Login from "./components/Login.js";
import Users from "./pages/Users.js";
import Jenis from "./pages/Jenis.js";
import Data from "./pages/Data.js";
import Peminjaman from "./pages/Peminjaman.js";
import AddJenis from "./pages/AddJenis.js";
import EditJenis from "./pages/EditJenis.js";
import AddUser from "./pages/AddUser.js";
import EditUser from "./pages/EditUser.js";
import AddBarang from "./pages/AddBarang.js";
import EditBarang from "./pages/EditBarang.js";
import AddPeminjaman from "./pages/AddPeminjaman.js";
import EditPeminjaman from "./pages/EditPeminjaman.js";
import AddPDFJenis from "./pages/addPDFJenis.js";
import AddPDFBarang from "./pages/AddPDFBarang.js";
import FormLaporan from "./pages/Laporan.js";
import AddPeminjamanPDF from "./pages/AddPDFPeminjaman.js";
import PeminjamanUser from "./pages/PeminjamanUser.js";
import FormAddPeminjamanUser from "./pages/AddPeminjamanUser.js";
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
            <Route path="/login" element={<Login />} />
            <Route path="/dasboard" element={<Dasboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/jenis" element={<Jenis />} />
            <Route path="/tambahjenis" element={<AddJenis />} />
            <Route path="/data" element={<Data />} />
            <Route path="/peminjaman" element={<Peminjaman />} />
            <Route path="/editjenis/:id" element={<EditJenis />} />
            <Route path="/tambahuser" element={<AddUser />} />
            <Route path="/updateuser/:id" element={<EditUser />} />
            <Route path="/tambahbarang" element={<AddBarang />} />
            <Route path="/updatebarang/:id" element={<EditBarang />} />
            <Route path="/tambahpeminjaman" element={<AddPeminjaman />} />
            <Route path="/updatepeminjaman/:id" element={<EditPeminjaman />} />
            <Route path="/jenispdf" element={<AddPDFJenis />} />
            <Route path="/barangpdf" element={<AddPDFBarang />} />
            <Route path="/Laporan" element={<FormLaporan />} />
            <Route path="/peminjamanpdf" element={<AddPeminjamanPDF />} />
            <Route path="/peminjamanuser" element={<PeminjamanUser />} />
            <Route
              path="/addpeminjamanuser"
              element={<FormAddPeminjamanUser />}
            />
          </Routes>
        </BrowserRouter>
        {/* {AddLibrary("assets/js/jquery.min.js")}
        {AddLibrary("assets/plugins/bootstrap/js/popper.min.js")}
        {AddLibrary("assets/plugins/bootstrap/js/bootstrap.min.js")}
        {AddLibrary("assets/plugins/p-scroll/perfect-scrollbar.js")} */}
      </div>
    </HelmetProvider>
  );
}

export default App;
