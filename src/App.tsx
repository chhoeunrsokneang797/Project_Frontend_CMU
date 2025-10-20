import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/main-layout";
import PageNotFound from "./components/page-not-found";
import HomePage from "./page";
import Room from "./page/room/Room";
import Order from "./page/order/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/room" element={<Room />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
