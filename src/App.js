import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  Footer,
  Header,
  Main,
  Navbar,
  OrderOnline,
  Reservations,
} from "./components";
import ConfirmedBooking from "./components/Reservations/ConfirmedBooking";
import { headerData, orderOnline, reservationData } from "./constants";
import DataContext from "./DataContext";

function App() {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const pathDataMapping = {
      "/": headerData,
      "/Little-Lemon": headerData,
      "/Reservations": reservationData,
      "/OrderOnline": orderOnline,
    };

    setData(pathDataMapping[location.pathname] || {});
  }, [location.pathname]);

  const renderHeaderAndMain = () => (
    <>
      <Header />
      <Main />
    </>
  );

  return (
    <>
      <Navbar />
      <DataContext.Provider value={data}>
        <Routes>
          <Route path="/Little-Lemon" element={renderHeaderAndMain()} />
          <Route path="/" element={renderHeaderAndMain()} />
          <Route
            path="/Reservations"
            element={
              <>
                <Header />
                <Reservations />
              </>
            }
          />
          <Route
            path="/OrderOnline"
            element={
              <>
                <Header />
                <OrderOnline />
              </>
            }
          />
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
      </DataContext.Provider>
      <Footer />
    </>
  );
}

export default App;
