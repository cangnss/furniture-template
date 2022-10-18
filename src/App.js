
import Header from "./pages/Header";
import CarouselContent from './pages/CarouselContent'
import Footer from "./pages/Footer";
import Brand from "./pages/Brand";

export default function App() {
  return (
    <div className="flex flex-col space-y-40">
      <Header />
      <main>
        <CarouselContent />
        <Brand />
      </main>
      <Footer />
    </div>
  );
}
