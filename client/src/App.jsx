import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from './pages/auth/Auth';
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import Dashboard from './pages/dashboard/Dashboard';
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="navbar">
          <Link to="/"> Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Auth />
            }
          />
          <Route path="/" element={
            <FinancialRecordsProvider>
              <Dashboard />
            </FinancialRecordsProvider>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
