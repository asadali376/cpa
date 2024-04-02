import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes/themes";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Staff from "./components/staff/staff";
import Courses from "./components/courses/courses";
import Updates from "./components/updates/updates";
import Contact from "./components/contact/contact";
import Cpstars from "./components/cpstars/cpstars";
import Footer from "./components/footer/footer";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  //   background: rgb(37,21,84);
  // background: linear-gradient(0deg, rgba(37,21,84,1) 3%, rgba(255,255,255,1) 100%);
  //   width: 100%;
  //   clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  width: 100%;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  background: rgb(37, 21, 84);
  background: linear-gradient(
    0deg,
    rgba(37, 21, 84, 1) 3%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
export const WrapperClip = styled.div`
  background: #ffffff;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode] = useState(true);
  // const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/components/home/home" exact element={<Home />} />
          <Route path="/components/staff/staff" exact element={<Staff />} />
          <Route path="/components/cpstars/cpstars" exact element={<Cpstars/>} />
          <Route path="/components/courses/courses" exact element={<Courses />} />
          <Route path="/components/updates/updates" exact element={<Updates />} />
          <Route path="/components/contact/contact" exact element={<Contact />} />
          </Routes>
        </Body>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
