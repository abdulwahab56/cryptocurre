import "./App.css";
import Header from "./components/header/Header";
import Whyus from "./components/whyus/Whyus";
import Testimonial from "./components/testimonial/Testimonial";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Whyus />
      <Testimonial />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
