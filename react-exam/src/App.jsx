import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContractsPage from "./pages/ContractsPage";
import ContractDetailsPage from "./pages/ContractDetailsPage";
import CreateContractPage from "./pages/CreateContractPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContractsPage/>} />
        <Route path="/create-contract" element={<CreateContractPage />} />
        <Route path="/contracts/:id" element={<ContractDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;