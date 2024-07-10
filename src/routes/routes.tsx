import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import NotFound from "../pages/NotFound";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/categories" element={<Category />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
