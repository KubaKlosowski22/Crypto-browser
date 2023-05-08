import { Dashboard } from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
