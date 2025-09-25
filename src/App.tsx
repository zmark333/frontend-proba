import { Header } from "./components/Header";
import { KeyholePortal } from "./components/KeyholePortal";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Market } from "./components/Market";
import { Explore } from "./components/Explore";
import { Wallet } from "./components/Wallet";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "market":
        return <Market />;
      case "explore":
        return <Explore />;
      case "wallet":
        return <Wallet />;
      case "login":
        return <Login onNavigate={handleNavigate} />;
      case "register":
        return <Register onNavigate={handleNavigate} />;
      case "home":
      default:
        return <KeyholePortal />;
    }
  };

  const shouldShowFooter = !["login", "register"].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      {!["login", "register"].includes(currentPage) && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      <main className={`flex-1 ${!["login", "register"].includes(currentPage) ? "pt-20" : ""}`}>
        {renderPage()}
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}