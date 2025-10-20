import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen text-sm sm:text-base">
      <Header />
      <main className="flex-1 bg-white">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
