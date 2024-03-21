import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import ChatBot from "../../components/ChatBot/ChatBot";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ChatBot />
    </>
  );
}
