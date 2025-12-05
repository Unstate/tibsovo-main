import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import YandexMetrika from "./components/YandexMetrika";

function App() {
  return (
    <>
      <YandexMetrika />
      <Routes>
        <Route path="/tibsovo-main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
