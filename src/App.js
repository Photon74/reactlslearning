import "./App.css";

import { useEffect, useState } from "react";

import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ChatPage } from "./pages/ChatPage";
import { Route, Routes } from "react-router-dom";
import { NoChat } from "./components/Chat/NoChat";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/nochat" element={<NoChat />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chats">
            <Route index element={<ChatPage />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </>
  );
}
