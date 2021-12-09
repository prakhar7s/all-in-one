import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainRoutes from "./routes/routes";

function App() {
  return (
    <div className="app">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
