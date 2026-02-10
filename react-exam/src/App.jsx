import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContractsPage from "./pages/ContractsPage";
import ContractDetailsPage from "./pages/ContractDetailsPage";
import CreateContractPage from "./pages/CreateContractPage";
import EditContractPage from "./pages/EditContractPage";
import { WitcherAuthProvider } from "./context/WitcherAuthContext";
import LoginPage from "./pages/LoginPage";
import Header from "./components/layout/Header";

function App() {
  return (
    <WitcherAuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ContractsPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-contract" element={<CreateContractPage />} />
          <Route path="/contracts/:id/edit" element={<EditContractPage />} />
          <Route path="/contracts/:id" element={<ContractDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </WitcherAuthProvider>  
  );
}

export default App;