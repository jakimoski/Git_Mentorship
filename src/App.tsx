import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Expenses from "./components/ExpensesComponent/Expenses";
import Header from "./components/HeaderComponent/Header";
import Overview from "./components/OverviewComponent/Overview";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence initial mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Overview />} />
          <Route path="expenses" element={<Expenses />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
