import "./App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/errors/NoPage";
import NoInternet from "./pages/errors/NoInternet";

export default function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    function handleOnlineStatusChange() {
      setIsOnline(window.navigator.onLine);
    }
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  return (
    <>
      {isOnline ? (
        <>
          <ToastContainer />
            <Router>
              <Routes>
                <Route exact path="*" element={<NoPage />} />
                <Route exact path="/" element={<Home />} />
              </Routes>
            </Router>
        </>
      ) : (
        <NoInternet />
      )}
    </>
  );
}
