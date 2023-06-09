import './App.css'
import {Home} from "./pages/home";
import './styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { NavBar } from "./pages/Navigation";
import Footer from "./pages/Footer";
import {I18nextProvider} from "react-i18next";
import i18n from "./utils/i18n";
import React from "react";
import Results from "./pages/Results";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/results" element={<Results/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
          </I18nextProvider>
    );
}

export default App
