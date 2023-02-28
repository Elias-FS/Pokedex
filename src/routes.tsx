import { Routes, Route } from "react-router-dom";
import App from "./App";
import { NotFound } from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default AppRouter;
