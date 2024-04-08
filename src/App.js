import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import "bootstrap/dist/css/bootstrap.min.css";
import WebCookies from "./Components/WebCookies";
import Privacypolicy from "./Components/Privacypolicy";
import TermCondition from "./Components/TermCondition";
import NewHome from "./Pages/Home/NewHome";
import SoftwareDevelopment from "./Pages/NewService/SoftwareDevelopment";
import GenerativeAI from "./Pages/NewService/GenerativeAI";
import DataEngineeringService from "./Pages/NewService/DataEngineeringService";
import DataAnalytics from "./Pages/NewService/DataAnalytics";
import SaaSDevelopment from "./Pages/NewService/SaaSDevelopment";
import NewFooter from "./Components/NewFooter";
import NewContactForm from "./Components/NewContactForm";
import MvpPage from "./Pages/NewService/MvpPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route
            path="/services/sass-development-company-coimbatore"
            element={<SaaSDevelopment />}
          />
          <Route
            path="/services/software-development-company-in-india"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="/services/genai-development-company-in-india"
            element={<GenerativeAI />}
          />
          <Route
            path="/services/data-enggineering-development-company-in-india"
            element={<DataEngineeringService />}
          />
          <Route
            path="/services/data-analytics-development-company-in-india"
            element={<DataAnalytics />}
          />
          <Route
            path="/services/mvp-development-company-in-india"
            element={<MvpPage/>}
          />
          <Route path="/contact" element={<NewContactForm/>} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/term-condition" element={<TermCondition />} />
          <Route path="*" element={<NewHome/>} />
        </Routes>
        <WebCookies />
        <NewFooter />
      </Router>
    </>
  );
}

export default App;
