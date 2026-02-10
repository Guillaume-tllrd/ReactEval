import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContractsPage from "./pages/ContractsPage";
import ContractDetailsPage from "./pages/ContractDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContractsPage/>} />
        <Route path="/contracts/:id" element={<ContractDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;