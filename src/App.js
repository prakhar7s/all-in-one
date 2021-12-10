import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { HeaderContext } from "./context/header-context";
import MainRoutes from "./routes/routes";

function App() {
  const { setStateValues, isHomePage } = useContext(HeaderContext);
  const location = useLocation();

  const listenScrollEvent = () => {
    if (window.scrollY < 15) {
      setStateValues("isScrolled", false);
    } else if (window.scrollY >= 15) {
      setStateValues("isScrolled", true);
    }
  };
  useEffect(() => {
    const isHomePage = location.pathname.includes("about");
    setStateValues("isHomePage", !isHomePage);
  }, [location, setStateValues]);
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
    // eslint-disable-next-line
  }, [setStateValues]);

  return (
    <div
      className="app"
      style={{
        paddingTop: isHomePage ? 70 : 0,
      }}
    >
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
