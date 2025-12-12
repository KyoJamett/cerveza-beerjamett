import { AppRoutes } from "./routes/AppRoutes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </>
  );
}

export default App;
