// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamInboxPage from "./page/TeamInboxPage";
import BroadcastPage from "./page/BroadcastPage";
import NotFoundPage from "./page/NotFoundPage";
import Layout from "./page/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TeamInboxPage />} />
          <Route path="teamInbox" element={<TeamInboxPage />} />
          <Route path="broadcast" element={<BroadcastPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
