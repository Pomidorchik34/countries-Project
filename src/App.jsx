import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/details"
            element={
              <MainLayout>
                <Details />
              </MainLayout>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
