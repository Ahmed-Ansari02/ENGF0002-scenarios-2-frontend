import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Landing from "./pages/Landing";
import Check_gate from "./pages/Check_gates";
import Upload from "./pages/Upload";
import Practice from "./pages/Practice";
import Questions_page from "./pages/Questions_page";

function App() {
  return (
    <div className="App">
      <div className=" text-white flex justify-center items-center text-2xl h-14 w-full rounded font-bold bg-blue-500 hover:text-black">
        <a href="/">Logic circuit simulator</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/check" element={<Check_gate />} />
          <Route path="/" element={<Landing />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/question" element={<Questions_page />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
